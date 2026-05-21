import { createSignal, createEffect, onMount, onCleanup } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";

const visitedCountries = [
  { geoName: "India", displayName: "India", code: "in", coords: [78, 20] as [number, number] },
  { geoName: "USA", displayName: "United States", code: "us", coords: [-96, 38] as [number, number] },
  { geoName: "United Arab Emirates", displayName: "UAE", code: "ae", coords: [54, 24] as [number, number] },
];

const wantToVisit = [
  { geoName: "Turkey", displayName: "Turkey", code: "tr", coords: [35, 39] as [number, number] },
  { geoName: "Switzerland", displayName: "Switzerland", code: "ch", coords: [8, 47] as [number, number] },
];

export default function GlobeModal() {
  const [isOpen, setIsOpen] = createSignal(false);
  const [selected, setSelected] = createSignal<string | null>(null);

  let containerRef: HTMLDivElement | undefined;
  let projection: d3.GeoProjection | undefined;
  let svgSel: d3.Selection<SVGSVGElement, unknown, null, undefined> | undefined;
  let pathGen: d3.GeoPath | undefined;
  let autoTimer: d3.Timer | undefined;
  let initialized = false;

  const initGlobe = () => {
    if (!containerRef || initialized) return;
    initialized = true;

    const width = containerRef.clientWidth;
    const height = containerRef.clientHeight;
    const radius = Math.min(width, height) / 2 - 8;

    const proj = d3
      .geoOrthographic()
      .scale(radius)
      .center([0, 0])
      .rotate([0, -25])
      .translate([width / 2, height / 2]);

    projection = proj;

    const pg = d3.geoPath().projection(proj);
    pathGen = pg;

    const svg = d3.select(containerRef).append("svg")
      .attr("width", width)
      .attr("height", height);

    svgSel = svg;

    svg.append("circle")
      .attr("fill", "#0f172a")
      .attr("stroke", "#1e293b")
      .attr("stroke-width", 1)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", radius);

    svg.append("g")
      .selectAll("path")
      .data((worldData as any).features)
      .enter()
      .append("path")
      .attr("d", (d: any) => pg(d))
      .attr("fill", (d: any) => {
        const name = d.properties.name;
        if (visitedCountries.some((c) => c.geoName === name)) return "#86efac";
        if (wantToVisit.some((c) => c.geoName === name)) return "#fde68a";
        return "#334155";
      })
      .style("stroke", "#1e293b")
      .style("stroke-width", 0.3);

    autoTimer = d3.timer(() => {
      const r = proj.rotate();
      proj.rotate([r[0] - 0.25, r[1]]);
      svg.selectAll("path").attr("d", (d: any) => pg(d));
    });
  };

  const startAutoRotation = () => {
    if (!projection || !svgSel || !pathGen || autoTimer) return;
    const proj = projection;
    const svg = svgSel;
    const pg = pathGen;
    autoTimer = d3.timer(() => {
      const r = proj.rotate();
      proj.rotate([r[0] - 0.25, r[1]]);
      svg.selectAll("path").attr("d", (d: any) => pg(d));
    });
  };

  const rotateTo = (coords: [number, number]) => {
    if (!projection || !svgSel || !pathGen) return;

    autoTimer?.stop();
    autoTimer = undefined;

    const current = projection.rotate() as [number, number, number];
    const target: [number, number, number] = [-coords[0], -coords[1], 0];
    const lerp = d3.interpolate(current, target);
    const duration = 1200;
    const startTime = Date.now();
    const proj = projection;
    const svg = svgSel;
    const pg = pathGen;

    const t = d3.timer(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      proj.rotate(lerp(d3.easeCubicInOut(progress)));
      svg.selectAll("path").attr("d", (d: any) => pg(d));
      if (progress >= 1) t.stop();
    });
  };

  onMount(() => {
    document.addEventListener("open-globe-modal", () => setIsOpen(true));
  });

  onCleanup(() => {
    autoTimer?.stop();
  });

  createEffect(() => {
    if (isOpen() && !initialized) {
      requestAnimationFrame(initGlobe);
    }
  });

  createEffect(() => {
    const sel = selected();
    if (!svgSel) return;
    svgSel.selectAll("path").attr("fill", (d: any) => {
      const name = d.properties.name;
      if (sel === name) return "#60a5fa";
      if (visitedCountries.some((c) => c.geoName === name)) return "#86efac";
      if (wantToVisit.some((c) => c.geoName === name)) return "#fde68a";
      return "#334155";
    });
  });

  const close = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return (
    <div
      class={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen() ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        class={`bg-darkslate-500 border border-darkslate-100 rounded-xl p-6 w-full max-w-4xl mx-4 transition-transform duration-300 ${isOpen() ? "scale-100" : "scale-95"
          }`}
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-white">Countries Visited</h2>
          <button
            onClick={close}
            class="text-gray-400 hover:text-white transition-colors p-1 rounded"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex gap-4 h-[420px]">
          {/* Globe */}
          <div
            ref={(el) => { containerRef = el; }}
            class="flex-1 overflow-hidden rounded-lg bg-[#0f172a]"
          />

          {/* Sidebar */}
          <div class="w-44 flex flex-col gap-2 border-l border-darkslate-100 pl-4 overflow-y-auto">
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Visited</p>
            {visitedCountries.map((c) => (
              <button
                onClick={() => {
                  if (selected() === c.geoName) {
                    setSelected(null);
                    startAutoRotation();
                  } else {
                    setSelected(c.geoName);
                    rotateTo(c.coords);
                  }
                }}
                class={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${selected() === c.geoName
                    ? "bg-green-400/20 border border-green-400/50 text-white"
                    : "border border-transparent hover:bg-white/5 text-gray-300"
                  }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.displayName}
                  class="h-4 rounded shadow"
                  width="24"
                  height="16"
                />
                {c.displayName}
              </button>
            ))}

            <div class="border-t border-darkslate-100 my-1" />

            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Want to Visit</p>
            {wantToVisit.map((c) => (
              <button
                onClick={() => {
                  if (selected() === c.geoName) {
                    setSelected(null);
                    startAutoRotation();
                  } else {
                    setSelected(c.geoName);
                    rotateTo(c.coords);
                  }
                }}
                class={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${selected() === c.geoName
                    ? "bg-green-400/20 border border-green-400/50 text-white"
                    : "border border-transparent hover:bg-white/5 text-gray-300"
                  }`}
              >
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  alt={c.displayName}
                  class="h-4 rounded shadow"
                  width="24"
                  height="16"
                />
                {c.displayName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

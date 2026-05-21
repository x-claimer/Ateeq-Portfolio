import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://mohammed-ateeq.netlify.app/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://mohammed-ateeq.netlify.app/sitemap-index.xml",
        "https://mohammed-ateeq.netlify.app/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
});

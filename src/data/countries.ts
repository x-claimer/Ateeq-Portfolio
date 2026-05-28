export interface GlobeCountry {
  geoName: string;
  displayName: string;
  code: string;
  coords: [number, number];
}

export const visitedCountries: GlobeCountry[] = [
  { geoName: "USA", displayName: "United States", code: "us", coords: [-96, 38] },
  { geoName: "India", displayName: "India", code: "in", coords: [78, 20] },
  { geoName: "United Arab Emirates", displayName: "UAE", code: "ae", coords: [54, 24] },
];

export const wantToVisitCountries: GlobeCountry[] = [
  { geoName: "Turkey", displayName: "Turkey", code: "tr", coords: [35, 39] },
  { geoName: "Switzerland", displayName: "Switzerland", code: "ch", coords: [8, 47] },
];

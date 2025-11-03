interface RevenueLocation {
  country: string;
  coordinates: [number, number];
  revenue: number;
}

export interface LocationMapProps {
  data: RevenueLocation[];
  geoUrl: string;
}

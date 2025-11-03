export interface Metric {
  name: string;
  count: string;
  gain?: number;
  loss?: number,
  background: string;
  onClickFunc?: () => void;
}

export interface MetricsSectionProps {
  metricsData: Metric[];
  projectionsData: any[];
}

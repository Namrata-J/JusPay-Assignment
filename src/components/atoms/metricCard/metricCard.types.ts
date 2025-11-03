export interface MetricCardProps {
  name: string;
  count: string;
  gain?: number;
  loss?: number;
  background: string;
  isDark?: boolean;
  onClickFunc?: () => void;
}
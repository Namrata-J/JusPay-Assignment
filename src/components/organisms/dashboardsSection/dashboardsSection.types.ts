export interface DashboardItem {
  icon: React.ReactElement;
  name: string;
}

export interface DashboardsSectionProps {
  dashboards: DashboardItem[];
  openItem: string
}

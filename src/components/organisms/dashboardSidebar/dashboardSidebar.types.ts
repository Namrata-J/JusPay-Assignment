export interface DashboardSidebarProps {
  favourites: string[];
  recently: string[];
  dashboards: Array<{ icon: React.ReactElement; name: string }>;
  pages: Array<{
    icon: React.ReactElement;
    name: string;
    subList?: string[];
  }>;
  openSidebar: boolean;
}

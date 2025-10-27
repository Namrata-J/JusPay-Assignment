export interface PageItem {
  icon: React.ReactElement;
  name: string;
  subList?: string[];
}

export interface PagesSectionProps {
  pages: PageItem[];
  openItem: string;
  onItemClick: (pageName: string) => void;
}

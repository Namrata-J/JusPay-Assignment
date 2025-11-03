export type breadCrumb = {
    text: string;
    navigationLink: string;
}

export interface DashboardHeaderType {
  openSidebar: boolean;
  openRightbar: boolean;
  breadcrumbList: breadCrumb[];
  sideBarVisibilityHandler: () => void;
  rightBarVisibilityHandler: () => void
}

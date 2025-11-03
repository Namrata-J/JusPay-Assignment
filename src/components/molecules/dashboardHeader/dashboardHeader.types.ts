import { breadCrumb } from "../../organisms/dashboardHeader/dashboardHeader.types";

export interface DashboardHeaderLeftSectionType {
  openSidebar: boolean;
  breadcrumbList: breadCrumb[];
  sideBarVisibilityHandler: () => void;
}

export interface DashboardHeaderRightSectionType {
  openRightbar: boolean;
  rightBarVisibilityHandler: () => void;
}
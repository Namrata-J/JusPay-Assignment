import { useState } from "react";
import { Drawer } from "@mui/material";
import { flexWithStart } from "../../../utils/styles";
import { PagesSection } from "../pagesSection/PagesSection";
import { DashboardSidebarProps } from "./dashboardSidebar.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { UserHeader } from "../../molecules/userHeader/UserHeader";
import { FavoritesSection } from "../favouritesSection/FavouritesSection";
import { DashboardsSection } from "../dashboardsSection/DashboardsSection";

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  favourites,
  recently,
  dashboards,
  pages,
  openSidebar
}) => {
  const { convertPxWidthToVh } = useThemeRegistery();
  const drawerWidth = convertPxWidthToVh(212);
  const [openItem, setOpenItem] = useState("");

  const handleItemClick = (pageName: string) => {
    setOpenItem(openItem === pageName ? "" : pageName);
  };

  return (
    <Drawer
      sx={{
        width: openSidebar ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={openSidebar}
    >
      <UserHeader />
      <div
        className="dashboard-sidebar__content"
        style={{ ...flexWithStart, alignItems: "flex-start" }}
      >
        <FavoritesSection favourites={favourites} recently={recently} />
        <DashboardsSection dashboards={dashboards} openItem={openItem} />
        <PagesSection
          pages={pages}
          openItem={openItem}
          onItemClick={handleItemClick}
        />
      </div>
    </Drawer>
  );
};

export { DashboardSidebar };

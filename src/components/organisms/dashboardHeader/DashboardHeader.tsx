import "./styles.css";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { flexWithSpace } from "../../../utils/styles";
import { DashboardHeaderType } from "./dashboardHeader.types";
import { DashboardHeaderLeftSection } from "../../molecules/dashboardHeader/DashboardHeaderLeftSection";
import { DashboardHeaderRightSection } from "../../molecules/dashboardHeader/DashboardHeaderRightSection";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const DashboardHeader = ({
  openSidebar,
  openRightbar,
  breadcrumbList,
  sideBarVisibilityHandler,
  rightBarVisibilityHandler,
}: DashboardHeaderType) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();

  return (
    <Box
      className="dashboard__header"
      sx={{ position: "sticky", top: 0, zIndex: 99 }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: theme.palette.background.default,
          boxShadow: "none",
          borderBottom: `1px solid ${
            mode === "light"
              ? theme.palette.grey[500]
              : theme.palette.grey[100]
          }`,
        }}
      >
        <Toolbar sx={flexWithSpace}>
          <DashboardHeaderLeftSection
            openSidebar={openSidebar}
            breadcrumbList={breadcrumbList}
            sideBarVisibilityHandler={sideBarVisibilityHandler}
          />
          <DashboardHeaderRightSection
            openRightbar={openRightbar}
            rightBarVisibilityHandler={rightBarVisibilityHandler}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { DashboardHeader };

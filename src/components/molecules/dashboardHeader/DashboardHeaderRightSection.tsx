import { Box } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { flexWithStart } from "../../../utils/styles";
import { IconBtn } from "../../atoms/iconBtn/IconBtn";
import { SearchInput } from "../../atoms/searchInput/SearchInput";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DashboardHeaderRightSectionType } from "./dashboardHeader.types";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

const DashboardHeaderRightSection = ({ openRightbar, rightBarVisibilityHandler }: DashboardHeaderRightSectionType) => {
  const { mode, toggleTheme } = useThemeRegistery();
  return (
    <Box sx={{ ...flexWithStart, gap: "0.5rem" }}>
      <SearchInput />
      <IconBtn
        icon={
          mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )
        }
        label="toggle theme"
        onClick={toggleTheme}
      />
      <IconBtn label="history" icon={<HistoryRoundedIcon />} />
      <IconBtn label="notifications" icon={<NotificationsNoneRoundedIcon />} />
      <IconBtn label="open and close drawer" icon={openRightbar ? <ChevronRightRoundedIcon /> : <ListIcon />} onClick={rightBarVisibilityHandler} />
    </Box>
  );
};

export { DashboardHeaderRightSection };

import { Box } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import { flexWithStart } from "../../../utils/styles";
import { IconBtn } from "../../atoms/iconBtn/IconBtn";
import { Breadcrumb } from "../../atoms/breadcrumb/Breadcrumb";
import { DashboardHeaderLeftSectionType } from "./dashboardHeader.types";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const DashboardHeaderLeftSection = ({
  openSidebar,
  breadcrumbList,
  sideBarVisibilityHandler
}: DashboardHeaderLeftSectionType) => {
  return (
    <Box sx={{ ...flexWithStart, gap: "0.5rem" }}>
      <IconBtn
        icon={openSidebar ? <ChevronLeftRoundedIcon /> : <ListIcon />}
        label="open and close drawer"
        onClick={sideBarVisibilityHandler}
      />
      <IconBtn
        icon={<StarBorderRoundedIcon />}
        label="starred"
        onClick={() => {}}
      />
      <Breadcrumb breadcrumbList={breadcrumbList} />
    </Box>
  );
};

export { DashboardHeaderLeftSection };
import "./styles.css";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import { DashboardSidebar } from "../../organisms/dashboardSidebar/DashboardSidebar";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";

const DefaultDashboard = () => {
  const favourites = ["Overview", "Recently"];
  const recently: string[] = [];

  const dashboards = [
    {
      icon: <PieChartOutlineIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Default",
    },
    {
      icon: <LocalMallOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "eCommerce",
    },
    {
      icon: <FolderOpenOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Projects",
    },
    {
      icon: <ImportContactsOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Online Courses",
    },
  ];

  const pages = [
    {
      icon: <AssignmentIndOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "User Profile",
      subList: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
    },
    {
      icon: <BadgeOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Account",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Corporate",
    },
    {
      icon: <ChromeReaderModeOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Blog",
    },
    {
      icon: <ForumOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Social",
    },
  ];

  return (
    <div className="dashboard-default">
      <DashboardSidebar
        favourites={favourites}
        recently={recently}
        dashboards={dashboards}
        pages={pages}
      />
    </div>
  );
};

export { DefaultDashboard };

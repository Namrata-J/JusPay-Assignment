import { Box } from "@mui/material";
import { DashboardsSectionProps } from "./dashboardsSection.types";
import { SectionTitle } from "../../atoms/sectionTitle/SectionTitle";
import { NavListItem } from "../../molecules/navListItem/NavListItem";

const DashboardsSection: React.FC<DashboardsSectionProps> = ({
  dashboards,
  openItem
}) => {
  return (
    <Box className="dashboard-sidebar--secondSection">
      <SectionTitle>Dashboards</SectionTitle>
      {dashboards.map((dashboard, index) => (
        <NavListItem key={index} icon={dashboard.icon} text={dashboard.name} openItem={openItem} showExpandIcon={false} />
      ))}
    </Box>
  );
};

export { DashboardsSection };

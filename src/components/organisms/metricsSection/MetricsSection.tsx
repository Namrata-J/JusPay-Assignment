import { Box } from "@mui/material";
import { flexWithSpace } from "../../../utils/styles";
import { MetricsSectionProps } from "./metricsSection.types";
import { MetricsGrid } from "../../molecules/metricsGrid/MetricsGrid";
import { ProjectionsChart } from "../../molecules/chart/ProjectionsChart";

const MetricsSection = ({
  metricsData,
  projectionsData,
}: MetricsSectionProps) => {
  return (
    <Box className="ecommerce-metircs__firstSection" sx={flexWithSpace}>
      <MetricsGrid metrics={metricsData} />
      <ProjectionsChart data={projectionsData} />
    </Box>
  );
};

export { MetricsSection };

import { Box } from "@mui/material";
import { MetricsGridProps } from "./metricsGrid.types";
import { MetricCard } from "../../atoms/metricCard/MetricCard";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const MetricsGrid = ({ metrics }: MetricsGridProps) => {
  const { mode } = useThemeRegistery();

  return (
    <Box className="firstSection--leftSide">
      {metrics.map((metric, i) => (
        <MetricCard
          key={i}
          name={metric.name}
          count={metric.count}
          gain={metric.gain}
          loss={metric.loss}
          background={metric.background}
          isDark={mode === 'light' ? true : i === 1 || i === 2}
          onClickFunc={metric.onClickFunc}
        />
      ))}
    </Box>
  );
};

export { MetricsGrid };

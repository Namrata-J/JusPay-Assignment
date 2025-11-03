import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ProjectionsChartProps } from "./chart.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const ProjectionsChart = ({ data }: ProjectionsChartProps) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box
      className="firstSection--rightSide"
      sx={{
        background:
          mode === "light"
            ? theme.palette.blueGrey[100]
            : theme.palette.grey[50],
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: "600",
          fontSize: convertPxWidthToVh(14),
        }}
      >
        Projections vs Actuals
      </Typography>
      <BarChart
        style={{
          width: "100%",
          height: "100%",
          padding: "1.5rem 0 0 0",
        }}
        data={data}
      >
        <CartesianGrid
          strokeDasharray="0"
          vertical={false}
          stroke={
            mode === "light" ? theme.palette.grey[500] : theme.palette.grey[100]
          }
        />
        <XAxis
          dataKey="name"
          tick={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "12px",
            fill:
              mode === "light"
                ? theme.palette.grey[700]
                : theme.palette.grey[300],
          }}
        />
        <YAxis
          width="auto"
          tick={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "12px",
            fill:
              mode === "light"
                ? theme.palette.grey[700]
                : theme.palette.grey[300],
          }}
          tickCount={4}
          tickFormatter={(value) => `${value / 1000000}M`}
        />
        <Tooltip />
        <Bar
          dataKey="projection"
          fill={theme.palette.blueGrey[200]}
          stackId="overlap"
          barSize={30}
        />
        <Bar
          dataKey="actual"
          fill={theme.palette.blueGrey[400]}
          stackId="overlap"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </Box>
  );
};

export { ProjectionsChart };

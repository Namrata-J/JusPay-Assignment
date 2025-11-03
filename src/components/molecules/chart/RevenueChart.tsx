import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@mui/material/styles";
import { RevenueChartProps } from "./chart.types";
import { flexWithStart } from "../../../utils/styles";
import { Box, Divider, Typography } from "@mui/material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { ChartLegend } from "../../atoms/chartLegend/ChartLegend";

const RevenueChart = ({ data, legends }: RevenueChartProps) => {
  const theme = useTheme();
  const { mode, convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box
      className="secondSection--leftSide"
      sx={{
        background:
          mode === "light"
            ? theme.palette.blueGrey[100]
            : theme.palette.grey[50],
      }}
    >
      <Box sx={{ ...flexWithStart, gap: 2 }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: "600",
            fontSize: convertPxWidthToVh(14),
          }}
        >
          Revenue
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ height: "20px", width: "5px", color: theme.palette.grey[200] }}
        />
        {legends.map((legend, i) => (
          <ChartLegend
            key={i}
            color={legend.color}
            text={legend.text}
            amount={legend.amount}
          />
        ))}
      </Box>
      <LineChart
        style={{
          width: "100%",
          height: "100%",
          padding: "1rem 0 1rem 0",
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
        <Line
          type="monotone"
          dataKey="currentWeek"
          stroke={mode === "light" ? theme.palette.blueGrey[200] : "#8884d8"}
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="previousWeek"
          stroke={mode === "light" ? theme.palette.text.primary : "#82ca9d"}
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </Box>
  );
};

export { RevenueChart };

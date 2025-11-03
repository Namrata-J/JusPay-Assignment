import { Cell, Pie, PieChart } from "recharts";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SalesPieChartProps } from "./chart.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { SalesMetric } from "../../atoms/salesMetric/SalesMetric";
import { flexWithCenter, flexWithStart } from "../../../utils/styles";

const SalesPieChart = ({ data, colors }: SalesPieChartProps) => {
  const theme = useTheme();
  const { mode, convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box
      className="thirdSection--rightSide"
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
        Total Sales
      </Typography>
      <Box sx={{ ...flexWithCenter, pt: 2 }}>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={49}
            fill="#8884d8"
            dataKey="value"
            cornerRadius={30}
            paddingAngle={-10}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                stroke={
                  mode === "light" ? theme.palette.blueGrey[100] : "#272927"
                }
                strokeWidth={5}
              />
            ))}
          </Pie>
        </PieChart>
      </Box>
      <Box
        sx={{ ...flexWithStart, justifyContent: "space-between" }}
        className="salesMetricsWrapper"
      >
        {data.map((sale, i) => (
          <SalesMetric
            key={i}
            name={sale.name}
            value={sale.value}
            color={colors[i % colors.length]}
          />
        ))}
      </Box>
    </Box>
  );
};

export { SalesPieChart };

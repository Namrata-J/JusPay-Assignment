import { Box, Typography } from "@mui/material";
import { flexWithStart } from "../../../utils/styles";
import { ChartLegendProps } from "./chartLegend.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const ChartLegend = ({ color, text, amount }: ChartLegendProps) => {
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box sx={flexWithStart} className="legend">
      <Box className="legendDot" sx={{ background: color }}></Box>
      <Typography variant="h5" sx={{ fontSize: convertPxWidthToVh(12) }}>
        {text}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "600",
          fontSize: convertPxWidthToVh(12),
        }}
      >
        {amount}
      </Typography>
    </Box>
  );
};

export { ChartLegend };
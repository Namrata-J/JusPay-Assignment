import { Box, Typography } from "@mui/material";
import { SalesMetricProps } from "./salesMetric.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { flexWithStart, flexWithSpace } from "../../../utils/styles";

const SalesMetric = ({ name, value, color }: SalesMetricProps) => {
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box sx={flexWithSpace}>
      <Box sx={{ ...flexWithStart, gap: 1 }}>
        <Box className="salesDot" sx={{ background: color }}></Box>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: "400",
            fontSize: convertPxWidthToVh(12),
          }}
        >
          {name}
        </Typography>
      </Box>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: "400",
          fontSize: convertPxWidthToVh(12),
        }}
      >
        ${value}
      </Typography>
    </Box>
  );
};

export { SalesMetric };
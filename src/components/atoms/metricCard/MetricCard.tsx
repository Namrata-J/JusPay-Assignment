import MovingIcon from "@mui/icons-material/Moving";
import { MetricCardProps } from "./metricCard.types";
import { Box, Typography, useTheme } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { flexWithSpace, flexWithStart } from "../../../utils/styles";

const MetricCard = ({
  name,
  count,
  gain,
  loss,
  background,
  isDark,
  onClickFunc
}: MetricCardProps) => {
  const theme = useTheme();
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box
      className="metricBox"
      sx={{
        background,
        borderRadius: "16px",
        color: isDark
          ? theme.palette.text.primary
          : theme.palette.background.default,
      }}
      onClick={onClickFunc}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: "600",
          fontSize: convertPxWidthToVh(14),
        }}
      >
        {name}
      </Typography>
      <Box sx={{ ...flexWithSpace, pt: 1 }}>
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontWeight: "600",
            fontSize: convertPxWidthToVh(24),
          }}
        >
          {count}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontWeight: "400",
            fontSize: convertPxWidthToVh(12),
            ...flexWithStart,
            gap: "0.3rem",
          }}
        >
          {gain && "+"}
          {loss && "-"}
          {gain || loss}%{gain && <MovingIcon sx={{ fontSize: "1rem" }} />}
          {loss && <TrendingDownIcon sx={{ fontSize: "1rem" }} />}
        </Typography>
      </Box>
    </Box>
  );
};

export { MetricCard };

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StatusBadgeProps } from "./statusBadge.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const theme = useTheme();
  const { convertPxWidthToVh } = useThemeRegistery();

  const STATUS_COLORS: Record<string, string> = {
    "In Progress": "#8A8CD9",
    Completed: "#4AA785",
    Pending: "#59A8D4",
    Approved: "#FFC555",
    Rejected: theme.palette.grey[300],
  };

  return (
    <Typography
      variant="body2"
      sx={{
        color: STATUS_COLORS[status] || theme.palette.text.primary,
        fontSize: convertPxWidthToVh(14),
      }}
    >
      {status}
    </Typography>
  );
};

export { StatusBadge };

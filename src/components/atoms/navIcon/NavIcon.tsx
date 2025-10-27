import { ListItemIcon } from "@mui/material";
import { NavIconProps } from "./navIcons.types";

const NavIcon: React.FC<NavIconProps> = ({
  icon,
  minWidth = "fit-content",
  paddingRight = "0.5rem",
}) => {
  return <ListItemIcon sx={{ minWidth, paddingRight }}>{icon}</ListItemIcon>;
};

export { NavIcon };

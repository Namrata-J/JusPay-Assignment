import { NavIcon } from "../../atoms/navIcon/NavIcon";
import { NavListItemProps } from "./navListItem.types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { List, ListItemButton, ListItemText } from "@mui/material";

const NavListItem: React.FC<NavListItemProps> = ({
  icon,
  text,
  onClick,
  paddingLeft = 0,
  openItem,
  showExpandIcon
}) => {
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <List sx={{ pt: 0, pb: 0 }}>
      <ListItemButton onClick={onClick} sx={{ pl: paddingLeft }}>
      {showExpandIcon ? openItem === text ? <ExpandLess /> : <ExpandMore /> : null}
        <NavIcon icon={icon} />
        <ListItemText
          primary={text}
          sx={{
            margin: 0,
            "& .MuiTypography-root": {
              fontSize: convertPxWidthToVh(14),
              fontWeight: 400,
              fontFamily: '"Inter", sans-serif',
            },
          }}
        />
      </ListItemButton>
    </List>
  );
};

export { NavListItem };

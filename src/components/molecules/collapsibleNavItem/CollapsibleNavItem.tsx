import { NavIcon } from "../../atoms/navIcon/NavIcon";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { CollapsibleNavItemProps } from "./collapsibleNavItem.types";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";

const CollapsibleNavItem: React.FC<CollapsibleNavItemProps> = ({
  icon,
  text,
  isOpen,
  onClick,
  subItems = [],
}) => {
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <List sx={{ pt: 0, pb: 0 }}>
      <ListItemButton onClick={onClick} sx={{ pl: 0 }}>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
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
      {subItems.length > 0 && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {subItems.map((subItem, index) => (
            <List component="div" disablePadding key={index}>
              <ListItemButton sx={{ pl: 6 }}>
                <ListItemText
                  primary={subItem}
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
          ))}
        </Collapse>
      )}
    </List>
  );
};

export { CollapsibleNavItem };

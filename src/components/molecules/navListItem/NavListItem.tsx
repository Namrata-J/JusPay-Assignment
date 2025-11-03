import { useTheme } from "@mui/material/styles";
import { NavIcon } from "../../atoms/navIcon/NavIcon";
import { NavListItemProps } from "./navListItem.types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

const NavListItem: React.FC<NavListItemProps> = ({
  icon,
  text,
  subText,
  onClick,
  paddingLeft = 0,
  openItem,
  showExpandIcon,
  isRightBarContent,
}) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <List sx={{ pt: 0, pb: 0 }}>
      <ListItemButton onClick={onClick} sx={{ pl: paddingLeft }}>
        {showExpandIcon ? (
          openItem === text ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
        <NavIcon icon={icon} />
        <Box>
          <ListItemText
            primary={text}
            sx={{
              margin: 0,
              "& .MuiTypography-root": {
                fontSize: convertPxWidthToVh(14),
                fontWeight: 400,
                fontFamily: '"Inter", sans-serif',
                ...(isRightBarContent
                  ? {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "200px",
                      textOverflow: "ellipsis",
                    }
                  : {}),
              },
            }}
          />
          {isRightBarContent && (
            <ListItemText
              primary={subText}
              sx={{
                margin: 0,
                "& .MuiTypography-root": {
                  fontSize: convertPxWidthToVh(12),
                  fontWeight: 400,
                  fontFamily: '"Inter", sans-serif',
                  color:
                    mode === "light"
                      ? theme.palette.grey[500]
                      : theme.palette.grey[300],
                },
              }}
            />
          )}
        </Box>
      </ListItemButton>
    </List>
  );
};

export { NavListItem };

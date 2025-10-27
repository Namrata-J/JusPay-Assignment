import { NavIcon } from "../../atoms/navIcon/NavIcon";
import { DotIcon } from "../../atoms/dotIcon/DotIcon";
import { FavoritesTabProps } from "./favouritesTab.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { List, ListItemButton, ListItemText } from "@mui/material";

const FavoritesTab: React.FC<FavoritesTabProps> = ({ items }) => {
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <>
      {items.map((item, index) => (
        <List key={index} sx={{ pt: 0, pb: 0 }}>
          <ListItemButton>
            <NavIcon icon={<DotIcon />} />
            <ListItemText
              primary={item}
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
    </>
  );
};

export { FavoritesTab };

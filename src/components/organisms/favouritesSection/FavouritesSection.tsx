import { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import { FavoritesSectionProps } from "./favouritesSection.types";
import { FavoritesTab } from "../../molecules/favouritesTab/FavouritesTab";

const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  favourites,
  recently,
}) => {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabStyle = {
    padding: "0 0.1rem 0 0",
    fontWeight: 400,
    fontFamily: '"Inter", sans-serif',
    color: "#FFFFFF33",
    "&.Mui-selected": {
      color: theme.palette.text.secondary,
    },
  };

  return (
    <Box className="dashboard-sidebar--firstSection">
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="favorites and recently tabs"
          sx={{
            "& .MuiTabs-indicator": {
              height: "0",
            },
          }}
        >
          <Tab label="Favorites" value="1" sx={tabStyle} />
          <Tab label="Recently" value="2" sx={tabStyle} />
        </TabList>
        <TabPanel value="1" sx={{ padding: "0" }}>
          <FavoritesTab items={favourites} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "0" }}>
          <FavoritesTab items={recently} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export { FavoritesSection };

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { LocationMapProps } from "./map.types";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { flexWithStart, flexWithSpace } from "../../../utils/styles";

const LocationMap = ({ data, geoUrl }: LocationMapProps) => {
  const theme = useTheme();
  const { mode, convertPxWidthToVh } = useThemeRegistery();

  const colorScale = scaleLinear<string, string>()
    .domain([0, Math.max(...data.map((d) => d.revenue))])
    .range(["#C6C7F8", "#C6C7F8"]);

  return (
    <Box
      className="secondSection--rightSide"
      sx={{
        background:
          mode === "light"
            ? theme.palette.blueGrey[100]
            : theme.palette.grey[50],
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: "600",
          fontSize: convertPxWidthToVh(14),
          whiteSpace: "nowrap",
        }}
      >
        Revenue by Location
      </Typography>
      <ComposableMap
        projectionConfig={{ scale: 180 }}
        style={{ width: "100%", height: "120px" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={theme.palette.blueGrey[400]}
                stroke={theme.palette.background.default}
              />
            ))
          }
        </Geographies>
        {data.map(({ coordinates, revenue, country }) => (
          <Marker key={country} coordinates={coordinates}>
            <circle
              r={10}
              fill={colorScale(revenue)}
              stroke={theme.palette.text.primary}
              strokeWidth={4}
              style={{ cursor: "pointer" }}
            />
          </Marker>
        ))}
      </ComposableMap>
      <Box
        className="progressBar__wrapper"
        sx={{ ...flexWithStart, justifyContent: "space-between" }}
      >
        {data.map((item, i) => (
          <Box key={i}>
            <Box sx={flexWithSpace}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "400",
                  fontSize: convertPxWidthToVh(12),
                }}
              >
                {item.country}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "400",
                  fontSize: convertPxWidthToVh(12),
                }}
              >
                {item.revenue / 1000}K
              </Typography>
            </Box>
            <Box className="progressBar">
              <Box
                className="progressBar--percentage"
                sx={{
                  width: `${item.revenue / 1000}%`,
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { LocationMap };

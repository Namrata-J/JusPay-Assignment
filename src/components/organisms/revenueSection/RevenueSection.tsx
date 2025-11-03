import { Box } from "@mui/material";
import { flexWithSpace } from "../../../utils/styles";
import { RevenueSectionProps } from "./RevenueSection.types";
import { LocationMap } from "../../molecules/map/LocationMap";
import { RevenueChart } from "../../molecules/chart/RevenueChart";

const RevenueSection = ({
  revenueData,
  revenueLegends,
  locationData,
  geoUrl,
}: RevenueSectionProps) => {
  return (
    <Box className="ecommerce-metircs__secondSection" sx={flexWithSpace}>
      <RevenueChart data={revenueData} legends={revenueLegends} />
      <LocationMap data={locationData} geoUrl={geoUrl} />
    </Box>
  );
};

export { RevenueSection };

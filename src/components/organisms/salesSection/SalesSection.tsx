import { Box } from "@mui/material";
import { flexWithSpace } from "../../../utils/styles";
import { SalesSectionProps } from "./salesSection.types";
import { ProductsTable } from "../../molecules/table/ProductsTable";
import { SalesPieChart } from "../../molecules/chart/SalesPieChart";

const SalesSection = ({
  productsData,
  tableHeadings,
  salesData,
  salesColors,
}: SalesSectionProps) => {
  return (
    <Box className="ecommerce-metircs__thirdSection" sx={flexWithSpace}>
      <ProductsTable data={productsData} headings={tableHeadings} />
      <SalesPieChart data={salesData} colors={salesColors} />
    </Box>
  );
};

export { SalesSection };

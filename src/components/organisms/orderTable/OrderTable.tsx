import { Box } from "@mui/material";
import { OrderTableProps } from "./orderTable.types";
import { OrderTableRow } from "../../molecules/table/OrderTableRow";
import { OrderTableHeader } from "../../molecules/table/OrderTableHeader";

const OrderTable = ({ headings, orders }: OrderTableProps) => {
  return (
    <Box>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <OrderTableHeader headings={headings} />
        <tbody>
          {orders.map((order, index) => (
            <OrderTableRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export { OrderTable };

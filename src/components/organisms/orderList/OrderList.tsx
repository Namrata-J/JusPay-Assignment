import { Box } from "@mui/material";
import { OrderListProps } from "./orderList.types";
import { flexWithStart } from "../../../utils/styles";
import { OrderTable } from "../orderTable/OrderTable";
import { Pagination } from "../../molecules/pagination/Pagination";
import { OrderListActions } from "../../molecules/orderListActions/OrderListActions";

const OrderList = ({
  actions,
  tableHeadings,
  orders,
  currentPage,
  totalPages,
  onPageChange,
}: OrderListProps) => {
  return (
    <Box
      className="dashboard-default dashboard-default__order-list"
      sx={{...flexWithStart, }}
    >
      <OrderListActions actions={actions} />
      <OrderTable headings={tableHeadings} orders={orders} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Box>
  );
};

export { OrderList };

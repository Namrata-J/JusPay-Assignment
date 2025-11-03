import { OrderTableRowProps } from "./table.types";
import { UserCell } from "../../atoms/userCell/UserCell";
import { StatusBadge } from "../../atoms/statusBadge/StatusBadge";

const OrderTableRow = ({ order }: OrderTableRowProps) => {
  return (
    <tr>
      <td>{order.orderId}</td>
      <td>
        <UserCell userName={order.user} />
      </td>
      <td>{order.project}</td>
      <td>{order.address}</td>
      <td>{order.date}</td>
      <td>
        <StatusBadge status={order.status} />
      </td>
    </tr>
  );
};

export { OrderTableRow };

interface OrderData {
  orderId: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
}

export interface OrderTableProps {
  headings: string[];
  orders: OrderData[];
}

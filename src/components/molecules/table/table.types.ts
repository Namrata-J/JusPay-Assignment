interface ProductData {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export interface ProductsTableProps {
  data: ProductData[];
  headings: string[];
}

interface OrderData {
  orderId: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
}

export interface OrderTableRowProps {
  order: OrderData;
}

export interface OrderTableHeaderProps {
  headings: string[];
}

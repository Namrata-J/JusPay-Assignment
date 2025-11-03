interface OrderData {
  orderId: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
}

interface Action {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export interface OrderListProps {
  actions: Action[];
  tableHeadings: string[];
  orders: OrderData[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

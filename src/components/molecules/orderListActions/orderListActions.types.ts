interface Action {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export interface OrderListActionsProps {
  actions: Action[];
}

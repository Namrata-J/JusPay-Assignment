export interface CollapsibleNavItemProps {
  icon: React.ReactElement;
  text: string;
  isOpen: boolean;
  onClick: () => void;
  subItems?: string[];
}
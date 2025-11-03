export interface NavListItemProps {
  icon: React.ReactElement;
  text: string;
  onClick?: () => void;
  paddingLeft?: number;
  openItem: string;
  showExpandIcon: boolean;
  isRightBarContent?: boolean;
  subText?: string;
}

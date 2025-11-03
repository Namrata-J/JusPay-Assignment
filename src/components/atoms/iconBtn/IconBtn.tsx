import { IconButton } from "@mui/material";
import { IconBtnProps } from "./iconBtn.types";

const IconBtn = ({ icon, label, onClick, ...props }: IconBtnProps) => {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label={label}
      onClick={onClick}
      {...props}
    >
      {icon}
    </IconButton>
  );
};

export { IconBtn };

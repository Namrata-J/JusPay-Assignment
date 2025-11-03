import { ReactNode } from "react";
import { IconButtonProps } from "@mui/material";

export interface IconBtnProps
  extends Omit<IconButtonProps, "size" | "edge" | "color"> {
  icon: ReactNode;
  label: string;
}

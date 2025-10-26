import { ReactNode } from "react";
import { PaletteMode } from "@mui/material";

export interface ThemePaletteType {
  toggleTheme: () => void;
  mode: PaletteMode | null;
}

export interface ThemeContextType extends ThemePaletteType {
  convertPxHeightToVh: (pxVal: number) => string;
  convertPxWidthToVh: (pxVal: number) => string;
}

export interface ThemeRegisteryProps {
  children: ReactNode;
}

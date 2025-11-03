import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: {
      primary: string;
      secondary?: string;
      main?: string;
    };
    blueGrey: PaletteColorOptions;
  }

  interface PaletteOptions {
    accent?: {
      primary?: string;
      secondary?: string;
      main?: string;
    };
    blueGrey?: PaletteColorOptions;
  }
}

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  PaletteMode,
  Theme,
} from "@mui/material";
import { orange, red, lightBlue, green } from "@mui/material/colors";
import {
  ThemePaletteType,
  ThemeContextType,
  ThemeRegisteryProps,
} from "./themeRegistery.types";

const themeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: null,
  convertPxHeightToVh: () => "0vh",
  convertPxWidthToVh: () => "0vh",
});

const ThemeRegistery = ({ children }: ThemeRegisteryProps) => {
  const [mode, setMode] = useState<PaletteMode | null>(null);
  const [windowDimensions, setWindowDimensions] = useState<{
    height: number | null;
    width: number | null;
  }>({
    width: window.innerWidth,
          height: window.innerHeight,
  });

  useEffect(() => {
    if (window !== undefined) {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(dark ? "dark" : "light");
      const handleResize = () =>
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleMode = useMemo<ThemePaletteType>(
    () => ({
      toggleTheme: () => {
        if (mode === "dark") {
          setMode("light");
        } else {
          setMode("dark");
        }
      },
      mode,
    }),
    [mode]
  );

  const sharedPalette = {
    error: {
      light: red[400],
      main: red[700],
      dark: red[900],
    },
    warning: {
      light: orange[700],
      main: orange[800],
      dark: orange[900],
    },
    info: {
      light: lightBlue[400],
      main: lightBlue[700],
      dark: lightBlue[900],
    },
    success: {
      light: green[400],
      main: green[700],
      dark: green[900],
    },
    grey: {
      50: "#ffffff0d",
      100: "#ffffff1a",
      200: "#ffffff33",
      300: "#ffffff66",
      400: '#1c1c1c0d',
      500: '#1c1c1c1a',
      600: "#1c1c1c33",
      700: "#1c1c1c66",
    },
    blueGrey: {
      50: "#E3F5FF",
      100: '#F7F9FB',
      200: '#A8C5DA',
      300: "#E5ECF6",
      400: '#A8C5DA80'
    }
  };

  const convertPxHeightToVh = (pxVal: number): string => {
    if (!windowDimensions?.height) return "0vh";
    return `${(pxVal / windowDimensions?.height) * 100}vh`;
  };

  const convertPxWidthToVh = (pxVal: number): string => {
    if (!windowDimensions?.height) return "0vh";
    return `${(pxVal / windowDimensions?.height) * 100}vh`;
  };

  const theme: Theme = createTheme({
    palette: {
      mode: mode === "light" ? "light" : "dark",
      ...(mode === "light"
        ? {
            background: {
              default: "#ffffff",
              paper: "#ffffff",
            },
            primary: {
              light: "#ebc171",
              main: "#EFB036",
              dark: "#e59801",
            },
            secondary: {
              light: "#6caae3",
              main: "#3B6790",
              dark: "#184a79",
            },
            accent: {
              main: "#889E73",
            },
            text: {
              primary: "#1C1C1C",
              secondary: "#1C1C1C66",
              disabled: "#9e9e9e",
            },
            ...sharedPalette,
          }
        : {
            background: {
              default: "#1C1C1C",
              paper: "#1C1C1C", // not used as of now
            },
            primary: { // not used as of now
              light: "#c49d51",
              main: "#b88421",
              dark: "#9f6d0c",
            },
            secondary: {
              light: "#FFBB37", // not used as of now
              main: "#FFBB37",
              dark: "#144e83", // not used as of now
            },
            text: {
              primary: "#ffffff",
              secondary: "#FFFFFF66",
              disabled: "#ffffff", // not used as of now
            },
            accent: {
              primary: "#12E6C8",
              secondary: "#A287F4"
            },
            ...sharedPalette,
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: "500",
            fontSize: "0.9rem",
          },
          containedPrimary: {
            color: "#000000",
          },
        },
        variants: [
          {
            props: { variant: "text" },
            style: {
              color: mode === "light" ? "secondary" : "#ffffff",
            },
          },
        ],
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            "& .MuiInputLabel-root": {
              fontFamily: "var(--font-poppins)",
              fontWeight: "300",
              fontSize: "0.85rem",
              lineHeight: "0.85rem",
            },
            "& .MuiOutlinedInput-root": {
              fontFamily: "var(--font-poppins)",
              fontWeight: "300",
              fontSize: "0.85rem",
              lineHeight: "0.85rem",
              borderRadius: "6px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1.5px",
              },
            },
            "& .MuiOutlinedInput-input": {
              height: "0.85rem",
              padding: "14.5px 14px",
              minHeight: "0.8rem",
              "&.MuiInputBase-inputMultiline": {
                padding: 0,
              },
              "&.MuiSelect-select": {
                minHeight: "0.8rem",
              },
            },
            "& .MuiFormHelperText-root": {
              fontSize: "0.6rem",
              fontWeight: "300",
              fontFamily: "var(--font-poppins)",
              color: sharedPalette.grey[500],
            },
          },
        },
      },
    },
    typography: {
      fontFamily: '"Space Mono", "Sora", "Inter", monospace, sans-serif',
      h1: {
        fontWeight: 700,
        fontFamily: '"Sora", sans-serif',
      },
      h5: {
        fontWeight: 400,
        fontFamily: '"Inter", sans-serif',
      },
      subtitle1: {
        fontFamily: '"Space Mono", monospace',
      },
      subtitle2: {
        fontFamily: '"Space Mono", monospace',
        fontSize: "0.8rem",
      },
      body1: {
        fontFamily: '"Space Mono", monospace',
        fontSize: "0.7rem",
      },
      body2: {
        fontFamily: '"Inter", sans-serif',
        fontSize: "0.7rem",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <themeContext.Provider
      value={{ ...toggleMode, convertPxHeightToVh, convertPxWidthToVh }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            ":root": {
              "--mui-bg": theme.palette.background.default,
              "--mui-paper": theme.palette.background.paper,
              "--mui-greyShade0": theme.palette.grey[50],
              "--mui-greyShade1": theme.palette.grey[100],
              "--mui-greyShade2": theme.palette.grey[200],
              "--mui-greyShade3": theme.palette.grey[300],
              "--mui-greyShade4": theme.palette.grey[400],
              "--mui-greyShade5": theme.palette.grey[500],
              "--mui-greyShade6": theme.palette.grey[600],
              "--mui-greyShade7": theme.palette.grey[700],
              "--mui-textShade1": theme.palette.text.primary
            },
            body: {
              backgroundColor: "var(--mui-bg)",
              height: "100vh",
            },
          }}
        />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  );
};

const useThemeRegistery = () => useContext(themeContext);

export { useThemeRegistery, ThemeRegistery };

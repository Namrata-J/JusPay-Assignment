import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SectionTitleProps } from "./sectionTitle.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    const theme = useTheme();
    const { convertPxWidthToVh } = useThemeRegistery();
  
    return (
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: 400,
          fontFamily: '"Inter", sans-serif',
          color: theme.palette.text.secondary,
          fontSize: convertPxWidthToVh(14),
          paddingBottom: "1rem",
        }}
      >
        {children}
      </Typography>
    );
  };

export { SectionTitle };
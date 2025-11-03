import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { PageNumberProps } from "./pageNumber.types";

const PageNumber = ({ pageNum, isActive, onClick }: PageNumberProps) => {
  const theme = useTheme();
  const { mode, convertPxWidthToVh } = useThemeRegistery();

  return (
    <Typography
      variant="h5"
      sx={{
        marginRight: "0.5rem",
        fontWeight: "400",
        background: isActive ? mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[100] : "",
        borderRadius: "8px",
        fontSize: convertPxWidthToVh(14),
        padding: "5px 10px",
        cursor: "pointer",
      }}
      onClick={() => onClick(pageNum)}
    >
      {pageNum}
    </Typography>
  );
};

export { PageNumber };

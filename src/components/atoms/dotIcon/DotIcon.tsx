import { useTheme } from "@mui/material/styles";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const DotIcon: React.FC = () => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();
  
  return (
    <FiberManualRecordIcon
      sx={{
        width: "0.5rem",
        color: mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[300],
      }}
    />
  );
};

export { DotIcon };

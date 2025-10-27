import { useTheme } from "@mui/material/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const DotIcon: React.FC = () => {
  const theme = useTheme();
  return (
    <FiberManualRecordIcon
      sx={{
        width: "0.5rem",
        color: theme.palette.grey[50],
      }}
    />
  );
};

export { DotIcon };

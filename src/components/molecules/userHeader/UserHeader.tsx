import { useTheme } from "@mui/material/styles";
import { Avatar, Typography } from "@mui/material";
import { UserHeaderProps } from "./userHeader.types";
import { flexWithStart } from "../../../utils/styles";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const UserHeader: React.FC<UserHeaderProps> = ({
  userName = "User",
  avatarText = "U",
}) => {
  const theme = useTheme();
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <div className="dashboard-sidebar__header" style={flexWithStart}>
      <Avatar>{avatarText}</Avatar>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontSize: convertPxWidthToVh(14),
          color: theme.palette.text.primary,
        }}
      >
        {userName}
      </Typography>
    </div>
  );
};

export { UserHeader };

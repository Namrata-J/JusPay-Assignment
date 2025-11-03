import { Avatar, Box } from "@mui/material";
import { UserCellProps } from "./userCell.types";
import { flexWithStart } from "../../../utils/styles";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const UserCell = ({ userName }: UserCellProps) => {
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box
      sx={{
        ...flexWithStart,
        gap: "0.5rem",
      }}
    >
      <Avatar
        sx={{
          width: convertPxWidthToVh(24),
          height: convertPxWidthToVh(24),
          fontSize: convertPxWidthToVh(12),
        }}
      >
        {userName[0]}
      </Avatar>
      {userName}
    </Box>
  );
};

export { UserCell };
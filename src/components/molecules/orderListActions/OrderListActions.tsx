import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IconBtn } from "../../atoms/iconBtn/IconBtn";
import { OrderListActionsProps } from "./orderListActions.types";
import { SearchInput } from "../../atoms/searchInput/SearchInput";
import { flexWithStart, flexWithSpace } from "../../../utils/styles";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const OrderListActions = ({ actions }: OrderListActionsProps) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();

  return (
    <Box
      sx={{
        ...flexWithSpace,
        ...(mode === "light"
          ? { background: theme.palette.blueGrey[100] }
          : {}),
      }}
      className="dashboard-default order-list__actions-box"
    >
      <Box sx={flexWithStart} className="order-list__actions">
        {actions.map((action, i) => (
          <IconBtn
            key={i}
            icon={action.icon}
            label={action.label}
            onClick={action.onClick}
          />
        ))}
      </Box>
      <SearchInput
        background={
          mode === "light" ? theme.palette.grey[300] : theme.palette.grey[500]
        }
        border={`1px solid ${
          mode === "light" ? theme.palette.grey[500] : theme.palette.grey[100]
        }`}
      />
    </Box>
  );
};

export { OrderListActions };

import { useTheme } from "@mui/material/styles";
import { OrderTableHeaderProps } from "./table.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const OrderTableHeader = ({ headings }: OrderTableHeaderProps) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();

  return (
    <thead>
      <tr>
        {headings.map((heading, i) => (
          <th
            key={i}
            style={
              mode === "light"
                ? {
                    borderBottom: `1px solid ${theme.palette.grey[600]}`,
                    color: theme.palette.grey[700],
                  }
                : {}
            }
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export { OrderTableHeader };

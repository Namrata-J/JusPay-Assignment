import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ProductsTableProps } from "./table.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const ProductsTable = ({ data, headings }: ProductsTableProps) => {
  const theme = useTheme();
  const { mode, convertPxWidthToVh } = useThemeRegistery();

  return (
    <Box
      className="thirdSection--leftSide"
      sx={{
        background:
          mode === "light"
            ? theme.palette.blueGrey[100]
            : theme.palette.grey[50],
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: "600",
          fontSize: convertPxWidthToVh(14),
        }}
      >
        Top Selling Products
      </Typography>
      <table
        cellPadding="8"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            {headings.map((heading, i) => (
              <th key={i}>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    fontWeight: "400",
                    fontSize: convertPxWidthToVh(12),
                    color: theme.palette.grey[300],
                  }}
                >
                  {heading}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    fontWeight: "400",
                    fontSize: convertPxWidthToVh(12),
                  }}
                >
                  {item.name}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    fontWeight: "400",
                    fontSize: convertPxWidthToVh(12),
                  }}
                >
                  {item.price}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    fontWeight: "400",
                    fontSize: convertPxWidthToVh(12),
                  }}
                >
                  {item.quantity}
                </Typography>
              </td>
              <td>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    fontWeight: "400",
                    fontSize: convertPxWidthToVh(12),
                  }}
                >
                  {item.amount}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export { ProductsTable };

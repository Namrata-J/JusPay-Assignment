import { useTheme } from "@mui/material/styles";
import { Breadcrumbs, Link } from "@mui/material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { breadCrumb } from "../../organisms/dashboardHeader/dashboardHeader.types";

const Breadcrumb = ({ breadcrumbList }: { breadcrumbList: breadCrumb[] }) => {
  const theme = useTheme();
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbList.map((link, _i) => (
        <Link
          key={_i}
          color="inherit"
          href={link?.navigationLink}
          sx={{
            "&.MuiTypography-root": {
              textDecoration: "none",
              fontSize: convertPxWidthToVh(14),
              fontWeight: 400,
              fontFamily: '"Inter", sans-serif',
              ...(_i === breadcrumbList.length - 1
                ? { color: theme.palette.text.primary }
                : {}),
            },
          }}
        >
          {link?.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export { Breadcrumb };

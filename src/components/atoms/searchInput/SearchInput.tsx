import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputProps } from "./searchInput.types";
import { Paper, IconButton, InputBase } from "@mui/material";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";

const SearchInput = ({
  placeholder = "Search",
  width = 160,
  onSearch,
  background,
  border,
}: SearchInputProps) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width,
        borderRadius: "8px",
        background:
          background ||
          (mode === "light"
            ? theme.palette.grey[400]
            : theme.palette.grey[100]),
        mr: "1rem",
        boxShadow: "none",
        border: border,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon
          sx={{ color: mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[300], fontSize: "1.2rem" }}
        />
      </IconButton>
      <InputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export { SearchInput };

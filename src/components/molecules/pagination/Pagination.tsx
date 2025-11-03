import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PaginationProps } from "./pagination.types";
import { flexWithStart } from "../../../utils/styles";
import { IconBtn } from "../../atoms/iconBtn/IconBtn";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { PageNumber } from "../../atoms/pageNumber/PageNUmber";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const theme = useTheme();
  const { mode } = useThemeRegistery();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Box
      sx={{
        ...flexWithStart,
        gap: "0.5rem",
        justifyContent: "flex-end",
      }}
    >
      <IconBtn
        icon={<KeyboardArrowLeftIcon />}
        label="previous page"
        sx={{
          color:
            mode === "light"
              ? currentPage === 1
                ? theme.palette.grey[700]
                : theme.palette.text.primary
              : currentPage === 1
              ? theme.palette.grey[300]
              : "#fff",
          padding: "0px",
        }}
        onClick={handlePrevious}
      />

      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        return (
          <PageNumber
            key={pageNum}
            pageNum={pageNum}
            isActive={currentPage === pageNum}
            onClick={onPageChange}
          />
        );
      })}

      <IconBtn
        icon={<KeyboardArrowRightIcon />}
        label="next page"
        sx={{
          color:
            mode === "light"
              ? currentPage === totalPages
                ? theme.palette.grey[700]
                : theme.palette.text.primary
              : currentPage === totalPages
              ? theme.palette.grey[300]
              : "#fff",
          padding: "0px",
        }}
        onClick={handleNext}
      />
    </Box>
  );
};

export { Pagination };

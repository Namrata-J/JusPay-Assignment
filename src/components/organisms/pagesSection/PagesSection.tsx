import { Box } from "@mui/material";
import { PagesSectionProps } from "./pagesSection.types";
import { SectionTitle } from "../../atoms/sectionTitle/SectionTitle";
import { NavListItem } from "../../molecules/navListItem/NavListItem";
import { CollapsibleNavItem } from "../../molecules/collapsibleNavItem/CollapsibleNavItem";

const PagesSection: React.FC<PagesSectionProps> = ({
  pages,
  openItem,
  onItemClick,
}) => {
  return (
    <Box className="dashboard-sidebar--thirdSection">
      <SectionTitle>Pages</SectionTitle>
      {pages.map((page, index) =>
        page.subList ? (
          <CollapsibleNavItem
            key={index}
            icon={page.icon}
            text={page.name}
            isOpen={openItem === page.name}
            onClick={() => onItemClick(page.name)}
            subItems={page.subList}
          />
        ) : (
          <NavListItem
            key={index}
            icon={page.icon}
            text={page.name}
            onClick={() => onItemClick(page.name)}
            openItem={openItem}
            showExpandIcon={true}
          />
        )
      )}
    </Box>
  );
};

export { PagesSection };

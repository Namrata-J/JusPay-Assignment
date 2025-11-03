import "./styles.css";
import { useState } from "react";
import {
  PROJECTIONS_DATA,
  REVENUE_LEGENDS,
  REVENUE_LOCATION_DATA,
  REVENUE_WEEK_DATA,
  SALES_COLORS,
  SALES_DATA,
  TABLE_DATA,
  TABLE_HEADINGS,
} from "../../../constants/dashboardData";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterListIcon from "@mui/icons-material/FilterList";
import { OrderList } from "../../organisms/orderList/OrderList";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { flexWithSpace, flexWithStart } from "../../../utils/styles";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import { SalesSection } from "../../organisms/salesSection/SalesSection";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { MetricsSection } from "../../organisms/metricsSection/MetricsSection";
import { RevenueSection } from "../../organisms/revenueSection/RevenueSection";
import { DashboardHeader } from "../../organisms/dashboardHeader/DashboardHeader";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import { DashboardSidebar } from "../../organisms/dashboardSidebar/DashboardSidebar";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import { DashboardRightBar } from "../../organisms/dashboardRightBar/DashboardRightBar";

const DefaultDashboard = () => {
  const theme = useTheme();
  const favourites = ["Overview", "Recently"];
  const recently: string[] = [];
  const navigate = useNavigate();
  const { mode } = useThemeRegistery();
  const [searchParams] = useSearchParams();
  const listName = searchParams.get("list");
  const isOrderList = listName === "orders";
  const { convertPxWidthToVh } = useThemeRegistery();
  const [openSidebar, setOpenSideBar] = useState(false);
  const [openRightbar, setOpenRightbar] = useState(false);

  const METRICS_DATA = [
    {
      name: "Customers",
      count: "3,781",
      gain: 11.01,
      background: theme.palette.blueGrey[50],
    },
    {
      name: "Orders",
      count: "1,219",
      loss: 0.03,
      background:
        mode === "light" ? theme.palette.blueGrey[100] : theme.palette.grey[50],
      onClickFunc: () => navigate("/dashboard/default?list=orders"),
    },
    {
      name: "Revenue",
      count: "$695",
      gain: 15.03,
      background:
        mode === "light" ? theme.palette.blueGrey[100] : theme.palette.grey[50],
    },
    {
      name: "Growth",
      count: "30.1%",
      gain: 6.08,
      background: theme.palette.blueGrey[300],
    },
  ];

  const dashboards = [
    {
      icon: <PieChartOutlineIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Default",
    },
    {
      icon: <LocalMallOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "eCommerce",
    },
    {
      icon: <FolderOpenOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Projects",
    },
    {
      icon: <ImportContactsOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Online Courses",
    },
  ];

  const pages = [
    {
      icon: <AssignmentIndOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "User Profile",
      subList: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
    },
    {
      icon: <BadgeOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Account",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Corporate",
    },
    {
      icon: <ChromeReaderModeOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Blog",
    },
    {
      icon: <ForumOutlinedIcon sx={{ fontSize: "1.1rem" }} />,
      name: "Social",
    },
  ];

  const breadcrumbList = [
    {
      text: "Dashboards",
      navigationLink: "",
    },
    {
      text: "Default",
      navigationLink: "/dashboard/default",
    },
  ];

  const sideBarVisibilityHandler = () => {
    setOpenSideBar(!openSidebar);
  };

  const rightBarVisibilityHandler = () => {
    setOpenRightbar(!openRightbar);
  };

  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const orderListActions = [
    {
      icon: <AddIcon />,
      label: "add order in your order list",
      onClick: () => {},
    },
    {
      icon: <FilterListIcon />,
      label: "filter your order list",
      onClick: () => {},
    },
    {
      icon: <SwapVertIcon />,
      label: "sort your order list",
      onClick: () => {},
    },
  ];

  const orderListTableHeadings = [
    "Order Id",
    "User",
    "Project",
    "Address",
    "Date",
    "Status",
  ];

  const allOrders = [
    {
      orderId: "ORD001",
      user: "Alice Johnson",
      project: "Website Redesign",
      address: "123 Main St, New York, NY",
      date: "2025-11-01",
      status: "Pending",
    },
    {
      orderId: "ORD002",
      user: "Bob Smith",
      project: "Mobile App",
      address: "456 Oak Ave, San Francisco, CA",
      date: "2025-10-29",
      status: "Completed",
    },
    {
      orderId: "ORD003",
      user: "Carol Lee",
      project: "Marketing Campaign",
      address: "789 Pine St, Chicago, IL",
      date: "2025-10-31",
      status: "Approved",
    },
    {
      orderId: "ORD004",
      user: "David Kim",
      project: "Data Analysis",
      address: "321 Elm Rd, Seattle, WA",
      date: "2025-10-27",
      status: "Pending",
    },
    {
      orderId: "ORD005",
      user: "Emily Clark",
      project: "SEO Optimization",
      address: "555 Maple Blvd, Austin, TX",
      date: "2025-10-30",
      status: "Approved",
    },
    {
      orderId: "ORD006",
      user: "Frank Harris",
      project: "Product Launch",
      address: "888 Birch Ln, Boston, MA",
      date: "2025-11-02",
      status: "In Progress",
    },
    {
      orderId: "ORD007",
      user: "Grace Brown",
      project: "User Research",
      address: "111 Cedar Dr, Miami, FL",
      date: "2025-10-28",
      status: "Rejected",
    },
    {
      orderId: "ORD008",
      user: "Henry Wilson",
      project: "Customer Support",
      address: "222 Spruce St, Denver, CO",
      date: "2025-10-29",
      status: "Completed",
    },
    {
      orderId: "ORD009",
      user: "Ivy Martinez",
      project: "UI Design",
      address: "333 Willow Rd, Portland, OR",
      date: "2025-10-26",
      status: "In Progress",
    },
    {
      orderId: "ORD010",
      user: "Jack Garcia",
      project: "Database Setup",
      address: "444 Aspen Way, Atlanta, GA",
      date: "2025-10-31",
      status: "Pending",
    },
    {
      orderId: "ORD011",
      user: "Kathy Nguyen",
      project: "Cloud Migration",
      address: "555 Chestnut Ct, Dallas, TX",
      date: "2025-11-01",
      status: "Completed",
    },
    {
      orderId: "ORD012",
      user: "Liam Scott",
      project: "Content Creation",
      address: "666 Redwood St, San Diego, CA",
      date: "2025-10-30",
      status: "In Progress",
    },
    {
      orderId: "ORD013",
      user: "Mia Turner",
      project: "Security Audit",
      address: "777 Cypress Ave, Houston, TX",
      date: "2025-10-27",
      status: "Pending",
    },
    {
      orderId: "ORD014",
      user: "Noah Phillips",
      project: "API Development",
      address: "888 Palm St, Philadelphia, PA",
      date: "2025-10-28",
      status: "Completed",
    },
    {
      orderId: "ORD015",
      user: "Olivia Evans",
      project: "Performance Testing",
      address: "999 Fir Ln, Minneapolis, MN",
      date: "2025-11-02",
      status: "In Progress",
    },
    {
      orderId: "ORD016",
      user: "Paul Rogers",
      project: "Bug Fixes",
      address: "123 Magnolia Way, Sacramento, CA",
      date: "2025-10-29",
      status: "Pending",
    },
    {
      orderId: "ORD017",
      user: "Quinn Adams",
      project: "Localization",
      address: "234 Hickory Ct, Orlando, FL",
      date: "2025-10-31",
      status: "Completed",
    },
    {
      orderId: "ORD018",
      user: "Rachel Nelson",
      project: "SEO Strategy",
      address: "345 Poplar St, Phoenix, AZ",
      date: "2025-10-26",
      status: "In Progress",
    },
    {
      orderId: "ORD019",
      user: "Sam Walker",
      project: "System Design",
      address: "456 Alder Ave, Columbus, OH",
      date: "2025-10-30",
      status: "Pending",
    },
    {
      orderId: "ORD020",
      user: "Tina Howard",
      project: "Database Optimization",
      address: "567 Walnut Rd, Detroit, MI",
      date: "2025-11-01",
      status: "Completed",
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = allOrders.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNum: number) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  return (
    <div className="dashboard-default" style={flexWithSpace}>
      <DashboardSidebar
        favourites={favourites}
        recently={recently}
        dashboards={dashboards}
        pages={pages}
        openSidebar={openSidebar}
      />
      <Box className="dashboard-default__content">
        <DashboardHeader
          openSidebar={openSidebar}
          openRightbar={openRightbar}
          breadcrumbList={breadcrumbList}
          sideBarVisibilityHandler={sideBarVisibilityHandler}
          rightBarVisibilityHandler={rightBarVisibilityHandler}
        />
        <Box className="dashboard-default__ecommerce">
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontSize: convertPxWidthToVh(14),
              fontWeight: 600,
              p: "2rem 0 1rem 1.8rem",
            }}
          >
            {isOrderList ? "Order List" : "eCommerce"}
          </Typography>
          {isOrderList ? (
            <OrderList
              actions={orderListActions}
              tableHeadings={orderListTableHeadings}
              orders={currentOrders}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          ) : (
            <Box
              className="dashboard-default dashboard-default__ecommerce-metircs"
              sx={flexWithStart}
            >
              <MetricsSection
                metricsData={METRICS_DATA}
                projectionsData={PROJECTIONS_DATA}
              />
              <RevenueSection
                revenueData={REVENUE_WEEK_DATA}
                revenueLegends={REVENUE_LEGENDS}
                locationData={REVENUE_LOCATION_DATA}
                geoUrl={geoUrl}
              />
              <SalesSection
                productsData={TABLE_DATA}
                tableHeadings={TABLE_HEADINGS}
                salesData={SALES_DATA}
                salesColors={SALES_COLORS}
              />
            </Box>
          )}
        </Box>
      </Box>
      <DashboardRightBar openRightbar={openRightbar} />
    </div>
  );
};

export { DefaultDashboard };

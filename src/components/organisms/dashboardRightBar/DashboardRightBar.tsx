import "./styles.css";
import { useTheme } from "@mui/material/styles";
import { flexWithStart } from "../../../utils/styles";
import { Box, Drawer, Typography } from "@mui/material";
import { RightBarContent } from "./dashboardRightBar.types";
import { useThemeRegistery } from "../../../theme/ThemeRegistery";
import { NavListItem } from "../../molecules/navListItem/NavListItem";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const DashboardRightBar = ({ openRightbar }: { openRightbar: boolean }) => {
  const theme = useTheme();
  const { mode, convertPxWidthToVh } = useThemeRegistery();
  const drawerWidth = convertPxWidthToVh(280);

  const styleObj = {
    width: "24px",
    height: "24px",
    color:
      mode === "light"
        ? theme.palette.text.primary
        : theme.palette.blueGrey[50],
  };

  const rightBarContent: RightBarContent = {
    Notifications: [
      {
        icon: (
          <Box sx={styleObj}>
            <PestControlOutlinedIcon />
          </Box>
        ),
        text: "You have a bug that needs to be fixed.",
        recievedAt: "Just now",
      },
      {
        icon: (
          <Box sx={styleObj}>
            <PermIdentityOutlinedIcon />
          </Box>
        ),
        text: "New user registered",
        recievedAt: "59 minutes ago",
      },
      {
        icon: (
          <Box sx={styleObj}>
            <PestControlOutlinedIcon />
          </Box>
        ),
        text: "You have a bug that needs to be fixed.",
        recievedAt: "12 hours ago",
      },
      {
        icon: (
          <Box sx={styleObj}>
            <SensorsOutlinedIcon />
          </Box>
        ),
        text: "Andi Lane subscribed to you",
        recievedAt: "Today, 11:59 AM",
      },
    ],
    Activities: [
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "You have a bug that needs to be fixed.",
        recievedAt: "Just now",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Released a new version",
        recievedAt: "59 minutes ago",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Submitted a bug",
        recievedAt: "12 hours ago",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Modified A data in Page X",
        recievedAt: "Today, 11:59 AM",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Deleted a page in Project X",
        recievedAt: "Feb 2, 2023",
      },
    ],
    Contacts: [
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Natali Craig",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Drew Cano",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Orlando Diggs",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Andi Lane",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Kate Morrison",
      },
      {
        icon: <AccountCircleOutlinedIcon />,
        text: "Koray Okumus",
      },
    ],
  };

  type SectionName = keyof typeof rightBarContent;

  return (
    <Drawer
      sx={{
        width: openRightbar ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={openRightbar}
    >
      <Box
        className="dashboardRightBar__content"
        sx={{ ...flexWithStart, alignItems: "flex-start" }}
      >
        {(Object.keys(rightBarContent) as SectionName[]).map((sectionName, _i) => (
          <Box key={_i}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 600,
                fontFamily: '"Inter", sans-serif',
                fontSize: convertPxWidthToVh(14),
                paddingBottom: "0.8rem",
              }}
            >
              {sectionName}
            </Typography>
            {rightBarContent[sectionName].map((listItem, index) => (
              <NavListItem
                key={index}
                icon={listItem.icon}
                text={listItem.text}
                subText={listItem?.recievedAt}
                openItem={""}
                showExpandIcon={false}
                isRightBarContent={true}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export { DashboardRightBar };

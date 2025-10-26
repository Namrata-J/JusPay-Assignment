import "./App.css";
import React from "react";
import matrix from "./assets/matrix.svg";
import Button from "@mui/material/Button";
import { flexWithSpace } from "./utils/styles";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useThemeRegistery } from "./theme/ThemeRegistery";

function App() {
  const theme = useTheme();
  const { convertPxWidthToVh } = useThemeRegistery();

  return (
    <div className="App">
      <img src={matrix} />
      <div
        className="homepage__content"
        style={{
          ...flexWithSpace,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={(theme) => ({
            borderRadius: "15px",
            width: "349px",
            height: "72px",
            fontSize: "30.42px",
            boxShadow: `10px 10px 0px ${theme.palette.grey[700]}`,
            "&:hover": {
              boxShadow: "none",
              background: theme.palette.secondary.light,
            },
          })}
        >
          ASSIGNMENT
        </Button>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: convertPxWidthToVh(128),
            lineHeight: convertPxWidthToVh(172),
          }}
        >
          UI DEVELOPER <br />
          ASSIGNMENT
        </Typography>
        <div className="homepage__assignmentFor">
          <Typography
            variant="subtitle1"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              fontSize: convertPxWidthToVh(36),
              opacity: "0.7",
              lineHeight: "100%",
            })}
          >
            COMPANY
          </Typography>
          <Typography
            variant="subtitle2"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              fontSize: convertPxWidthToVh(36),
              lineHeight: "300%",
            })}
          >
            Juspay Technologies Private Limited
          </Typography>
        </div>
        <div className="homepage__gradients">
          <Box
            className="homepage__gradient1"
            sx={{
              background: theme.palette.accent.primary,
            }}
          />
          <Box
            className="homepage__gradient2"
            sx={{
              background: theme.palette.accent.secondary,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

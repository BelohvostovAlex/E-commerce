import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { App } from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

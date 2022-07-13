import React from "react";

import { Box } from "@mui/material";

import { AppRouter } from "./components/AppRouter/AppRouter";
import { Header } from "./components/Header";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  return (
    <Box>
      <Announcement />
      <Header />
      <AppRouter />
      <Footer />
    </Box>
  );
};

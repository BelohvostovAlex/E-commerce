import React from "react";

import { Box } from "@mui/material";
import { Slider } from "../../components/Slider";
import { Categories } from "../../components/Categories";
import { Products } from "../../components/Products";
import { Newsletter } from "../../components/Newsletter";

export const Home: React.FC = () => {
  return (
    <Box>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </Box>
  );
};

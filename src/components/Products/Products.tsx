import React from "react";

import { Box } from "@mui/material";
import { Product } from "./Product/Product";

import { popularProducts } from "../../data";
import { styles } from "./styles";

export const Products: React.FC = () => {
  return (
    <Box sx={styles.productsWrapper}>
      {popularProducts.map(({ id, img }) => (
        <Product key={id} img={img} />
      ))}
    </Box>
  );
};

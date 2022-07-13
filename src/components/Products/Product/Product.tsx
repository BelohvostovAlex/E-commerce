import React from "react";

import { Box } from "@mui/material";
import { ProductProps } from "./interface";

import { styles } from "./styles";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export const Product: React.FC<ProductProps> = ({ img }) => {
  return (
    <Box sx={styles.productContainer}>
      <Box component="img" src={img} alt="img" sx={styles.productImg} />
      <Box sx={styles.productInfo} className="productInfoBlock">
        <Box sx={styles.productIconWrapper}>
          <ShoppingCartOutlined />
        </Box>
        <Box sx={styles.productIconWrapper}>
          <SearchOutlined />
        </Box>
        <Box sx={styles.productIconWrapper}>
          <FavoriteBorderOutlined />
        </Box>
      </Box>
    </Box>
  );
};

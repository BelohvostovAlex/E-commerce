import React from "react";

import { Box, Typography } from "@mui/material";

import { Products } from "../../components/Products";
import { Newsletter } from "../../components/Newsletter";
import { ProductsListSelect } from "../../components/ProductListSelect";

import { styles } from "./styles";

import { sizes, colors, sorts } from "../../data";

export const ProductList: React.FC = () => {
  return (
    <Box sx={styles.productListWrapper}>
      <Typography sx={styles.productFilterTitle} variant="h2">
        Dresses
      </Typography>
      <Box sx={styles.productFilterWrapper}>
        <Box sx={styles.productListFilter}>
          <Box component="span" sx={styles.productFilterText}>
            Filter Products:
          </Box>
          <ProductsListSelect
            title="Size"
            options={sizes}
            style={styles.productListSelect}
          />
          <ProductsListSelect title="Color" options={colors} />
        </Box>
        <Box sx={styles.productListFilter}>
          <Box component="span" sx={styles.productFilterText}>
            Sort Products:
          </Box>
          <ProductsListSelect title="Sort" options={sorts} />
        </Box>
      </Box>
      <Products />
      <Newsletter />
    </Box>
  );
};

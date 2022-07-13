import React from "react";

import { Box } from "@mui/material";
import { CategoryItem } from "./CategoryItem";

import { styles } from "./styles";

import { categories } from "../../data";

export const Categories: React.FC = () => {
  return (
    <Box sx={styles.CategoriesWrapper}>
      {categories.map(({ id, img, title }) => (
        <CategoryItem key={id} img={img} title={title} id={id} />
      ))}
    </Box>
  );
};

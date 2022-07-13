import React from "react";

import { CategoryItem } from "./CategoryItem";
import { CategoryItemContainerProps } from "./interface";

export const CategoryItemContainer: React.FC<CategoryItemContainerProps> = ({
  id,
  img,
  title,
}) => {
  return <CategoryItem id={id} img={img} title={title} />;
};

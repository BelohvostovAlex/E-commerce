import React from "react";

import { ProductListSelect } from "./ProductListSelect";
import { useInput } from "../../hooks/useInput";
import { ProductsListSelectContainerProps } from "./interfaces";

export const ProductsListSelectContainer: React.FC<
  ProductsListSelectContainerProps
> = ({ title, options, style }) => {
  const [selectValue, selectvalueHandler] = useInput();

  return (
    <ProductListSelect
      selectValue={selectValue}
      handleChange={selectvalueHandler}
      title={title}
      options={options}
      style={style}
    />
  );
};

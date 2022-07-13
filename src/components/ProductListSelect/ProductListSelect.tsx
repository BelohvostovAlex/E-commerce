import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ProductsListSelectProps } from "./interfaces";
import { makeStyles } from "./styles";

export const ProductListSelect: React.FC<ProductsListSelectProps> = ({
  title,
  options,
  selectValue,
  handleChange,
  style,
}) => {
  return (
    <FormControl size="small" sx={style}>
      <InputLabel id={`select-${title}`}>{title}</InputLabel>
      <Select
        labelId={`select-${title}`}
        id={`select-${title}`}
        value={selectValue}
        label={title}
        onChange={handleChange}
      >
        <MenuItem value={title} disabled={true}>
          <em>{title}</em>
        </MenuItem>
        {options.map((option, i) => (
          <MenuItem value={10 * i} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

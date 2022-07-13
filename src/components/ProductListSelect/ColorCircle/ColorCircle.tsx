import React from "react";

import { Box } from "@mui/material";
import { ColorCircleProps } from "./interface";
import { makeStyles } from "./styles";

export const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => {
  const style = makeStyles({ color });
  return <Box sx={style.root.circle} />;
};

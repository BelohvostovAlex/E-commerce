import React from "react";

import { Button } from "@mui/material";
import { ButtonRegularProps } from "./interface";

export const ButtonRegular: React.FC<ButtonRegularProps> = ({
  style,
  onClick,
  children,
}) => {
  return (
    <Button sx={style} onClick={onClick}>
      {children}
    </Button>
  );
};

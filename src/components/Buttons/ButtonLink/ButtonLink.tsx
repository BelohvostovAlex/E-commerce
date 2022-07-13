import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import {
  ButtonLinkColor,
  ButtonLinkProps,
  ButtonLinkSize,
  ButtonLinkVariant,
} from "./interfaces";

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  title,
  path,
  variant = ButtonLinkVariant.CONTAINED,
  style,
  size = ButtonLinkSize.MEDIUM,
  onClick,
  color = ButtonLinkColor.PRIMARY,
}) => {
  return (
    <Link to={path}>
      <Button
        variant={variant}
        sx={style}
        color={color}
        onClick={onClick}
        size={size}
      >
        {title}
      </Button>
    </Link>
  );
};

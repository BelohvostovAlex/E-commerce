import { SxProps } from "@mui/material";

export enum ButtonLinkVariant {
  OUTLINED = "outlined",
  CONTAINED = "contained",
  TEXT = "text",
}

export enum ButtonLinkSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

export enum ButtonLinkColor {
  ERROR = "error",
  INFO = "info",
  INHERIT = "inherit",
  PRIMARY = "primary",
  WARNING = "warning",
  SUCCESS = "success",
  SECONDARY = "secondary",
}

export interface ButtonLinkProps {
  title: string;
  variant?: ButtonLinkVariant;
  path: string;
  style?: SxProps;
  size?: ButtonLinkSize;
  color?: ButtonLinkColor;
  onClick?: () => void;
}

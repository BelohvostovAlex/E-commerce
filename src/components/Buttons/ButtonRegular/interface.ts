import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export interface ButtonRegularProps {
  onClick?: () => void;
  children: string | ReactNode;
  style?: SxProps;
}

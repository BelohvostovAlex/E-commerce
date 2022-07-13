import { SxProps } from "@mui/material";
import { EventType } from "../../hooks/useInput";

export interface ProductsListSelectProps {
  title: string;
  selectValue: string;
  options: string[];
  handleChange: (e: EventType) => void;
  style?: SxProps;
}

export interface ProductsListSelectContainerProps {
  title: string;
  options: string[];
  style?: SxProps;
}

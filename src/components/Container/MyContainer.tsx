import React from "react";

import Container from "@mui/material/Container";

import { MyContainerProps } from "./interface";

export const MyContainer: React.FC<MyContainerProps> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

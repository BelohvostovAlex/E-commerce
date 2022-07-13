import React from "react";

import { Box } from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { SliderArrowProps } from "./interface";
import { makeStyles } from "./style";

export const SliderArrow: React.FC<SliderArrowProps> = ({
  direction,
  onClick,
}) => {
  const styles = makeStyles({ direction });
  return (
    <Box sx={styles.SliderArrow} onClick={onClick}>
      {direction === "left" ? (
        <ArrowLeftIcon sx={styles.SliderArrowIcon} />
      ) : (
        <ArrowRightIcon sx={styles.SliderArrowIcon} />
      )}
    </Box>
  );
};

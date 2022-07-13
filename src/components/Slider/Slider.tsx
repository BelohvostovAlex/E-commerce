import React from "react";

import { Box } from "@mui/material";
import { SliderArrow } from "./SliderArrows/SliderArrow";
import { SliderItem } from "./SliderItem/SliderItem";
import { SliderProps } from "./interfaces";

import { makeStyles } from "./styles";

import { sliderItems } from "../../data";

export const Slider: React.FC<SliderProps> = ({ handleClick, slideIndex }) => {
  const styles = makeStyles({ slideIndex });
  return (
    <Box sx={styles.root.SliderContainer}>
      <SliderArrow direction="left" onClick={() => handleClick("left")} />
      <Box sx={styles.root.SliderWrapper}>
        {sliderItems.map(({ id, img, title, desc, bg }) => (
          <SliderItem
            key={id}
            img={img}
            title={title}
            desc={desc}
            id={id}
            bg={bg}
          />
        ))}
      </Box>
      <SliderArrow direction="right" onClick={() => handleClick("right")} />
    </Box>
  );
};

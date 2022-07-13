import React from "react";

import { Box, Typography } from "@mui/material";

import { makeStyles } from "./styles";
import { SliderItemProps } from "./interface";
import { ButtonLink } from "../../Buttons/ButtonLink";
import { ButtonLinkSize } from "../../Buttons/ButtonLink/interfaces";

export const SliderItem: React.FC<SliderItemProps> = ({
  id,
  img,
  title,
  desc,
  bg,
}) => {
  const styles = makeStyles({ bg });
  return (
    <Box sx={styles.root.SliderItem}>
      <Box sx={styles.root.SliderImageContainer}>
        <Box component="img" src={img} alt="img" sx={styles.root.SliderImage} />
      </Box>
      <Box sx={styles.root.SliderInfoContainer}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h4" sx={styles.root.SliderInfoDesc}>
          {desc}
        </Typography>
        <ButtonLink
          title="Show Now"
          path="/"
          style={styles.root.SliderInfoBtn}
          size={ButtonLinkSize.LARGE}
        />
      </Box>
    </Box>
  );
};

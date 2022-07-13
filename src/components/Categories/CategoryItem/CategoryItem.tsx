import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import { ButtonLink } from "../../Buttons/ButtonLink";
import {
  ButtonLinkColor,
  ButtonLinkSize,
} from "../../Buttons/ButtonLink/interfaces";

import { CategoryItemProps } from "./interface";
import { styles } from "./styles";

export const CategoryItem: React.FC<CategoryItemProps> = ({
  id,
  title,
  img,
}) => {
  return (
    <Box sx={styles.CategoryItemWrapper}>
      <Box component="img" src={img} alt="img" sx={styles.CategoryItemImg} />
      <Box sx={styles.CategoryItemInfo}>
        <Typography variant="h3" sx={styles.CategoryItemTitle}>
          {title}
        </Typography>
        <ButtonLink
          title="SHOP NOW"
          path="/"
          style={styles.CategoryItemBtn}
          size={ButtonLinkSize.SMALL}
          color={ButtonLinkColor.SECONDARY}
        />
      </Box>
    </Box>
  );
};

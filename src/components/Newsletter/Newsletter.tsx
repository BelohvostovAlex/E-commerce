import React from "react";

import { Box, ButtonBase, TextField, Typography } from "@mui/material";

import { NewsletterProps } from "./interfaces";
import { Send } from "@mui/icons-material";
import { ButtonRegular } from "../Buttons/ButtonRegular/ButtonRegular";

import { styles } from "./styles";

export const Newsletter: React.FC<NewsletterProps> = () => {
  return (
    <Box sx={styles.newsletterWrapper}>
      <Typography sx={styles.newsletterTitle}>Newsletter</Typography>
      <Box component="p" sx={styles.newsletterDesc}>
        Get timely updates from your favourite products.
      </Box>
      <Box sx={styles.newsletterInputWrapper}>
        <TextField placeholder="Your email" sx={styles.newsletterInput} />
        <ButtonRegular style={styles.newsletterBtn}>
          <Send />
        </ButtonRegular>
      </Box>
    </Box>
  );
};

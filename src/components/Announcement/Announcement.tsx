import React from "react";

import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const Announcement: React.FC = () => {
  return (
    <Box sx={styles.AnnouncementWrapper}>
      <Typography sx={styles.AnnouncementText}>
        Super Deal! Free Shipping on Orders Over $50
      </Typography>
    </Box>
  );
};

import React from "react";

import { Box, TextField, Badge, Typography } from "@mui/material";

import { Container } from "../Container";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { styles } from "./styles";

export const Header: React.FC = () => {
  return (
    <Box sx={styles.Header}>
      <Container>
        <Box sx={styles.HeaderWrapper}>
          <Box sx={styles.HeaderLeft}>
            <Typography sx={styles.HeaderLang}>EN</Typography>
            <Box sx={styles.HeaderSearchContainer}>
              <TextField placeholder="Search" />
              <SearchIcon sx={styles.HeaderSearchIcon} />
            </Box>
          </Box>
          <Box sx={styles.HeaderCenter}>
            <Typography sx={styles.HeaderLogo}>Alex App</Typography>
          </Box>
          <Box sx={styles.HeaderRight}>
            <Box sx={styles.HeaderLink}>Register</Box>
            <Box sx={styles.HeaderLink}>Sign In</Box>
            <Badge badgeContent={2} max={99} sx={styles.HeaderBadge}>
              <ShoppingBasketIcon />
            </Badge>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

import React from "react";

import { Box, Typography } from "@mui/material";

import { styles } from "./styles";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { Container } from "../Container";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Box sx={styles.footerContainer}>
        <Box sx={styles.footerLeft}>
          <Typography sx={styles.footerLogo}>Alex app</Typography>
          <Typography sx={styles.footerDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            illum. Dolorem facere ullam magni nulla! Ullam, iusto magni culpa
            cum sit, suscipit modi quos non recusandae, facilis quam pariatur
            hic.
          </Typography>
          <Box sx={styles.footerSocialContainer}>
            <Box sx={styles.footerSocialIcon}>
              <Facebook />
            </Box>
            <Box sx={styles.footerSocialIcon}>
              <Instagram />
            </Box>
            <Box sx={styles.footerSocialIcon}>
              <Twitter />
            </Box>
            <Box sx={styles.footerSocialIcon}>
              <Pinterest />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.footerCenter}>
          <Typography sx={styles.footerTitle}>Useful Links</Typography>
          <Box component="ul" sx={styles.footerList}>
            <Box component="li" sx={styles.footerListItem}>
              Home
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Man fashion
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Accessories
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Order Tracking
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Wishlist
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Cart
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Woman Fashion
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              My Account
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Wishlist
            </Box>
            <Box component="li" sx={styles.footerListItem}>
              Terms
            </Box>
          </Box>
        </Box>
        <Box sx={styles.footerRight}>
          <Typography sx={styles.footerTitle}>Contact</Typography>
          <Box sx={styles.footerContactItem}>
            <Room sx={styles.footerContactIcon} />{" "}
            <Typography>622 Dixie Path, South Tobinchester 98336</Typography>
          </Box>
          <Box sx={styles.footerContactItem}>
            <Phone sx={styles.footerContactIcon} />
            <Typography>+ 1 234 56 78</Typography>
          </Box>
          <Box sx={styles.footerContactItem}>
            <MailOutline sx={styles.footerContactIcon} />
            <Typography>contact@alex.com</Typography>
          </Box>
          <Box
            component="img"
            src=""
            alt="payment"
            sx={styles.footerPaymentImg}
          />
        </Box>
      </Box>
    </Container>
  );
};

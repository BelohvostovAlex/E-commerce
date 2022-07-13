import React from "react";

import { Box, Typography } from "@mui/material";

import { style } from "./styles";
import { ProductsListSelect } from "../../components/ProductListSelect";

import { colors, sizes } from "../../data";
import { ColorCircle } from "../../components/ProductListSelect/ColorCircle";
import { ButtonRegular } from "../../components/Buttons/ButtonRegular/ButtonRegular";
import { Add, Remove } from "@mui/icons-material";

export const Product: React.FC = () => {
  return (
    <Box sx={style.productWrapper}>
      <Box sx={style.productImgWrapper}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt=""
          sx={style.productImg}
        />
      </Box>
      <Box sx={style.productInfoWrapper}>
        <Typography variant="h3" sx={style.productTitle}>
          title
        </Typography>
        <Box component="p" sx={style.productDesc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
          repudiandae. Quo, molestiae dignissimos rerum nobis cumque omnis fuga,
          odit, fugiat dolores nisi totam aspernatur ad.
        </Box>
        <Box sx={style.productPrice} component="span">
          $ 20
        </Box>
        <Box sx={style.productFilterWrapper}>
          <ProductsListSelect title="Size" options={sizes} />
          <Box component="p">Color</Box>
          {colors.map((color) => (
            <ButtonRegular style={style.productColorBtn}>
              <ColorCircle color={color} />
            </ButtonRegular>
          ))}
        </Box>
        <Box sx={style.productBtnWrapper}>
          <Box sx={style.productAmountWrapper}>
            <ButtonRegular style={style.productBtnIcon}>
              <Remove />
            </ButtonRegular>
            <Box component="span" sx={style.productAmount}>
              1
            </Box>
            <ButtonRegular style={style.productBtnIcon}>
              <Add />
            </ButtonRegular>
          </Box>
          <ButtonRegular style={style.productBtn}>ADD TO CART</ButtonRegular>
        </Box>
      </Box>
    </Box>
  );
};

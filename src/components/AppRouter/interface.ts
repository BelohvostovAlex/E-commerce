import React from "react";

import { Home } from "../../pages/Home";
import { Product } from "../../pages/Product";
import { ProductList } from "../../pages/ProductList";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum AppPathes {
  HOME = "/",
  PRODUCT_LIST = "/products",
  PRODUCT = "/products/:id",
}

export const publicRoutes = [
  {
    path: AppPathes.HOME,
    element: Home,
  },
  {
    path: AppPathes.PRODUCT_LIST,
    element: ProductList,
  },
  {
    path: AppPathes.PRODUCT,
    element: Product,
  },
];

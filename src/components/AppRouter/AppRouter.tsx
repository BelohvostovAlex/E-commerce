import React from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./interface";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
    </Routes>
  );
};

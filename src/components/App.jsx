import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";
import Navigation from "./Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

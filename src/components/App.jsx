import React from "react";
import styled from "styled-components";
import { CartProvider } from "react-use-cart";

import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";
import Navigation from "./Navigation";

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const App = () => {
  return (
    <CartProvider>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </Container>
    </CartProvider>
  );
};

export default App;

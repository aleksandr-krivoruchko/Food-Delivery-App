import React from "react";
import styled from "styled-components";
import ShopList from "../components/ShopList";
import ProductList from "../components/ProductList";

const Container = styled.div`
  display: flex;
`;

const Shop = () => {
  return (
    <Container>
      <ShopList />
      <ProductList />
    </Container>
  );
};

export default Shop;

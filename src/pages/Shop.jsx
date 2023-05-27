import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../services/getData.js";
import ShopList from "../components/ShopList";
import ProductList from "../components/ProductList";
import { URL } from "../services/URL.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    getData(URL.SHOPS, setShops);
  }, []);

  useEffect(() => {
    switch (selectedShop) {
      case "mcd":
        getData(URL.MCD, setProducts);
        break;
      case "kfc":
        getData(URL.KFC, setProducts);
        break;
      case "atb":
        getData(URL.ATB, setProducts);
        break;
      default:
        break;
    }
  }, [selectedShop]);

  return (
    <Container>
      <ShopList shops={shops} setSelectedShop={setSelectedShop} />
      {selectedShop && <ProductList products={products} />}
    </Container>
  );
};

export default Shop;

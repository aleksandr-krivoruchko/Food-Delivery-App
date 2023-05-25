import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../services/getData.js";
import ShopList from "../components/ShopList";
import ProductList from "../components/ProductList";

const Container = styled.div`
  display: flex;
`;
const BASE_URL = "http://localhost:3001";
const SHOPS_URL = `${BASE_URL}/shops`;
const MCD_PROD_URL = `${BASE_URL}/mcd-products`;
const KFC_PROD_URL = `${BASE_URL}/kfc-products`;
const ATB_PROD_URL = `${BASE_URL}/atb-products`;

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState("atb");

  useEffect(() => {
    getData(SHOPS_URL, setShops);
  }, []);

  useEffect(() => {
    switch (selectedShop) {
      case "mcd":
        getData(MCD_PROD_URL, setProducts);
        break;
      case "kfc":
        getData(KFC_PROD_URL, setProducts);
        break;
      case "atb":
        getData(ATB_PROD_URL, setProducts);
        break;
      default:
        break;
    }
  }, [selectedShop]);

  return (
    <Container>
      <ShopList shops={shops} setSelectedShop={setSelectedShop} />
      <ProductList products={products} />
    </Container>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getData, getDataById } from "../services/getData.js";
import ShopList from "../components/ShopList";
import ProductList from "../components/ProductList";

const Container = styled.div`
  display: flex;
`;

const SHOPS_URL = "http://localhost:3003/shops";

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(SHOPS_URL);
      setShops(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.error();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataById(SHOPS_URL, selectedShop);
      setProducts(data.products);
    };
    try {
      fetchData();
    } catch (error) {
      console.error();
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

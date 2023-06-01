import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../services/getData.js";
import ShopList from "../components/ShopList";
import ProductList from "../components/ProductList";
import { URL } from "../services/URL.js";
import Loader from "../components/Loader.jsx";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    if (getData(URL.SHOPS, setShops)) {
      setLoading(false);
    }
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
      {!loading ? (
        <ShopList shops={shops} setSelectedShop={setSelectedShop} />
      ) : (
        <Loader />
      )}
      {selectedShop && <ProductList products={products} />}
    </Container>
  );
};

export default Shop;

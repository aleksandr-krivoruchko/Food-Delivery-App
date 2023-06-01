import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetch, getData } from "../services/getData.js";
import ShopList from "../components/ShopList";
import ProductList from "../components/ProductList";
import { URL } from "../services/URL.js";
import Loader from "../components/Loader.jsx";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ErrorText = styled.h3``;

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL.SHOPS)
      .then((shops) => setShops(shops))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
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
      {error && (
        <ErrorText>Whoops, something went wrong: {error.message}</ErrorText>
      )}
      {selectedShop && <ProductList products={products} />}
    </Container>
  );
};

export default Shop;

import React from "react";
import styled from "styled-components";
import { useLoadScript } from "@react-google-maps/api";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import CartList from "../components/CartList";
import OrderForm from "../components/Form";
import Map from "../components/Map";
import { createOrder } from "../services/getData";
import { URL } from "../services/URL.js";

const API_KEY = "AIzaSyCQyuuAXod4n8QtPWXn6zUeb9tXtLL74g4";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 85vh;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: left;
  margin-left: 5rem;
`;

const ShoppingCart = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ["places"],
  });
  const mapRef = React.useRef();
  const { isEmpty, items, emptyCart } = useCart();
  const [markerByAdress, setMarkerByAdress] = React.useState(null);

  const calcTotalAmount = items.reduce((total, item) => {
    const sum = Number(total) + Number(item.itemTotal);
    return sum.toFixed(2);
  }, 0);

  const orderedProducts = () => {
    const obj = {};
    items.map((item) => (obj[item.title] = item.quantity));
    return obj;
  };

  const handleSubmit = (values, actions) => {
    if (isEmpty) return toast.info("Add item to cart");

    const products = orderedProducts();
    const order = {
      buyerInfo: { ...values },
      orderInfo: { products, orderPrice: `${calcTotalAmount}$` },
    };

    createOrder(URL.ORDERS, order);
    actions.resetForm();
    emptyCart();
  };

  return (
    <Container>
      <Wrapper>
        {isLoaded ? (
          <Map
            markerByAdress={markerByAdress}
            isLoaded={isLoaded}
            mapRef={mapRef}
          />
        ) : (
          <h3>GoogleMap is loading...</h3>
        )}
        <OrderForm
          handleSubmit={handleSubmit}
          setMarkerByAdress={setMarkerByAdress}
          mapRef={mapRef}
        />
        <Title>
          Total price:
          {calcTotalAmount}$
        </Title>
      </Wrapper>
      <CartList products={items} isEmpty={isEmpty}></CartList>
    </Container>
  );
};

export default ShoppingCart;

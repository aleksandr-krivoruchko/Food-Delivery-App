import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import CartList from "../components/CartList";
import OrderForm from "../components/Form";
import { createOrder } from "../services/getData";

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

const ORDERS_URL = "http://localhost:3001/orders";

const ShoppingCart = () => {
  const { isEmpty, items, emptyCart } = useCart();
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

    createOrder(ORDERS_URL, order);
    actions.resetForm();
    emptyCart();
  };

  return (
    <Container>
      <Wrapper>
        <OrderForm handleSubmit={handleSubmit} />
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

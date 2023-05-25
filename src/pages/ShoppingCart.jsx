import React from "react";
import styled from "styled-components";

import { useCart } from "react-use-cart";
import CartList from "../components/CartList";
import OrderForm from "../components/Form";

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
const Message = styled.p`
  font-size: 2rem;
  text-align: center;
  color: red;
`;

const ShoppingCart = () => {
  const { isEmpty, items } = useCart();
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
    const products = orderedProducts();
    const buyerInfo = { ...values };
    const order = {
      buyerInfo,
      order: { products, orderPrice: `${calcTotalAmount}$` },
    };
    console.log(order);
    actions.resetForm();
  };

  if (isEmpty) return <Message>Your cart is empty</Message>;

  return (
    <Container>
      <Wrapper>
        <OrderForm handleSubmit={handleSubmit} />
        <Title>
          Total price:
          {calcTotalAmount}$
        </Title>
      </Wrapper>
      <CartList products={items}></CartList>
    </Container>
  );
};

export default ShoppingCart;

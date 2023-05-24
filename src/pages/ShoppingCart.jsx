import React from "react";
import styled from "styled-components";

import { useCart } from "react-use-cart";
import CartList from "../components/CartList";
import OrderForm from "../components/Form";

const Container = styled.div``;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const Title = styled.h1`
  text-align: right;
  margin-top: 1rem;
  margin-right: 3rem;
`;
const Message = styled.p`
  font-size: 2rem;
  text-align: center;
  color: red;
`;

const ShoppingCart = () => {
  const { isEmpty, items } = useCart();

  if (isEmpty) return <Message>Your cart is empty</Message>;

  return (
    <Container>
      <Flex>
        <OrderForm />
        <CartList products={items}></CartList>
      </Flex>
      <Title>
        Total price:
        {items.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0)}
        $
      </Title>
    </Container>
  );
};

export default ShoppingCart;

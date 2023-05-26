import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Section = styled.div`
  width: 50%;
  height: 95%;
  padding: 1rem;
  overflow-y: scroll;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Item = styled.li`
  width: 70%;
  background-color: aliceblue;
  border-radius: 0.8rem;
  -webkit-box-shadow: 5px -4px 15px -5px rgba(30, 130, 9, 0.53);
  box-shadow: 2px -2px 15px -5px rgba(30, 130, 9, 0.53);
  :hover {
    scale: 1.03;
  }
`;

const CartList = ({ products, isEmpty }) => {
  return (
    <Section>
      {isEmpty && <EmptyCart />}
      <List>
        {products.map(({ id, img, title, price, quantity }) => (
          <Item key={id}>
            <CartItem
              id={id}
              img={img}
              title={title}
              price={price}
              quantity={quantity}
            />
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default CartList;

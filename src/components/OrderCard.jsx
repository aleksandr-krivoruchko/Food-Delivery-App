import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-size: medium;
  margin-bottom: 0.2rem;
`;
const Text = styled.p`
  font-size: medium;
`;
const Button = styled.button`
  padding: 0.6rem;
  border-radius: 1rem;
  background-color: #fcedc5;
  font-size: medium;
  cursor: pointer;
  :hover {
    background-color: #ff9944;
  }
  :active {
    color: #fff;
  }
`;

const OrderCard = ({ order }) => {
  const products = Object.keys(order.orderInfo.products);

  return (
    <Card>
      <Title>
        <b>Order </b>№{order._id}
      </Title>

      <Text>
        <b>Buyer: </b>
        {order.buyerInfo.name}
      </Text>

      <Text>
        <b>Products: </b>
        {products.map((i) => (
          <span>{i}, </span>
        ))}
      </Text>

      <Text>
        <b>Price:</b> {order.orderInfo.orderPrice}
      </Text>
    </Card>
  );
};

export default OrderCard;

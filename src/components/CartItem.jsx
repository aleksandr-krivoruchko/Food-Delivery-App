import React from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";

const Card = styled.div`
  width: 100%;
  height: 200px;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const Thumb = styled.div`
  width: 50%;
  height: auto;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h5`
  font-size: large;
`;
const Price = styled.p`
  font-size: medium;
`;
const Count = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button``;
const Quantity = styled.span``;

const CartItem = ({ id, img, title, price, quantity }) => {
  const { updateItemQuantity } = useCart();

  return (
    <Card>
      <Thumb>
        <Image src={img} alt={title} />
      </Thumb>
      <Description>
        <Title>{title}</Title>
        <Price>Price: {price}$</Price>
        <Count>
          <Button
            type="button"
            onClick={() => updateItemQuantity(id, quantity - 1)}>
            -
          </Button>
          <Quantity>{quantity}</Quantity>
          <Button
            type="button"
            onClick={() => updateItemQuantity(id, quantity + 1)}>
            +
          </Button>
        </Count>
      </Description>
    </Card>
  );
};

export default CartItem;

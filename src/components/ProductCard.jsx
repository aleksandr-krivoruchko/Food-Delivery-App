import React from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";

const Card = styled.div`
  width: 250px;
  height: 250px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;
const Thumb = styled.div`
  width: 60%;
  height: auto;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Title = styled.h5`
  font-size: large;
`;
const Price = styled.p`
  font-size: medium;
`;
const Button = styled.button`
  padding: 0.6rem;
  border-radius: 1rem;
  background-color: #ff9944;
  font-size: medium;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #ff5599;
  }
  :active {
    color: #fff;
  }
`;

const ProductCard = (prod) => {
  const { addItem } = useCart();
  return (
    <Card>
      <Thumb>
        <Image src={prod.img} alt={prod.title} />
      </Thumb>
      <Title>{prod.title}</Title>
      <Price>Price: {prod.price}$</Price>
      <Button type="button" onClick={() => addItem(prod)}>
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductCard;

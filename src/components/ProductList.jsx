import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Section = styled.div`
  width: 80%;
  padding: 1rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Item = styled.li`
  flex: 0 0 30%;
  background-color: aliceblue;
  border-radius: 0.8rem;
  -webkit-box-shadow: 5px -4px 15px -5px rgba(30, 130, 9, 0.53);
  box-shadow: 2px -2px 15px -5px rgba(30, 130, 9, 0.53);
  :hover {
    scale: 1.03;
  }
`;

const ProductList = () => {
  const products = [
    {
      id: 1,
      img: "https://wallscloud.net/img/resize/300/300/MM/2023-03-10-pizza-1-58173.jpeg",
      title: "Burger",
      price: 44,
    },
    {
      id: 2,
      img: "https://wallscloud.net/img/resize/200/200/MM/2023-03-10-pizza-1-58173.jpeg",
      title: "ice-cream",
      price: 25,
    },
    {
      id: 3,
      img: "https://wallscloud.net/img/resize/200/200/MM/2023-03-10-pizza-1-58173.jpeg",
      title: "potato",
      price: 18,
    },
    {
      id: 4,
      img: "https://wallscloud.net/img/resize/200/200/MM/2023-03-10-pizza-1-58173.jpeg",
      title: "Burger",
      price: 44,
    },
    {
      id: 5,
      img: "https://wallscloud.net/img/resize/200/200/MM/2023-03-10-pizza-1-58173.jpeg",
      title: "ice-cream",
      price: 25,
    },
    {
      id: 6,
      img: "https://wallscloud.net/img/resize/200/200/MM/2023-03-10-pizza-1-58173.jpeg",
      title: "potato",
      price: 18,
    },
  ];

  return (
    <Section>
      <List>
        {products.map(({ id, img, title, price }) => (
          <Item>
            <ProductCard id={id} img={img} title={title} price={price} />
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default ProductList;

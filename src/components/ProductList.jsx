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

const ProductList = ({ products }) => {
  return (
    <Section>
      <List>
        {products.map(({ _id, img, title, price }) => (
          <Item key={_id}>
            <ProductCard id={_id} img={img} title={title} price={price} />
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default ProductList;

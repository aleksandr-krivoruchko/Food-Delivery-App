import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 20%;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

const List = styled.ul``;
const Item = styled.li`
  margin-bottom: 1rem;
`;
const Button = styled.button`
  width: 10rem;
  height: auto;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #ff9944;
  font-size: large;
  cursor: pointer;
  :hover {
    background-color: #ff5599;
  }
`;

const ShopList = () => {
  const shops = ["McDonalds", "KFC", "Metro", "ATB", "Varus"];

  return (
    <Section>
      <Title>Shops</Title>
      <List>
        {shops.map((shop) => (
          <Item key={shop}>
            <Button type="button">{shop}</Button>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default ShopList;

import React from "react";
import styled from "styled-components";
import activeShop from "../services/activeShop";
import Loader from "./Loader";

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
export const Button = styled.button`
  width: 10rem;
  height: auto;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #fcedc5;
  font-size: large;
  cursor: pointer;
  :hover {
    background-color: #ff9944;
  }
  :active {
    background-color: #fff;
  }
`;
const Img = styled.img``;

const ShopList = ({ shops, setSelectedShop }) => {
  return (
    <Section>
      <Title>Shops</Title>
      {shops ? (
        <List onClick={activeShop}>
          {shops.map((shop) => (
            <Item key={shop._id}>
              <Button type="button" onClick={() => setSelectedShop(shop.label)}>
                <Img src={shop.img} alt={shop.name} />
              </Button>
            </Item>
          ))}
        </List>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default ShopList;

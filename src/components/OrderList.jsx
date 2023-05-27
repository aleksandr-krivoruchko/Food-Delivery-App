import React from "react";
import styled from "styled-components";
import OrderCard from "./OrderCard";

const Section = styled.div`
  width: 80%;
  height: 85vh;
  margin: 0 auto;
  padding: 1rem;
  overflow-y: scroll;
`;

const StyledList = styled.ul``;
const Item = styled.li`
  margin-bottom: 0.8rem;
  background-color: aliceblue;
  border-radius: 0.8rem;
  -webkit-box-shadow: 5px -4px 15px -5px rgba(30, 130, 9, 0.53);
  box-shadow: 2px -2px 15px -5px rgba(30, 130, 9, 0.53);
  :hover {
    scale: 1.03;
  }
`;

const List = ({ orders }) => {
  return (
    <Section>
      <StyledList>
        {orders.map((order) => (
          <Item key={order._id}>
            <OrderCard order={order} />
          </Item>
        ))}
      </StyledList>
    </Section>
  );
};

export default List;

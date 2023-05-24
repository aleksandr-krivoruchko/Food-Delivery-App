import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 80%;
  padding: 1rem;
`;

const StyledList = styled.ul`
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

const List = ({ items, children }) => {
  return (
    <Section>
      <StyledList>
        {items.map((item) => (
          <Item key={item.id}>{children}</Item>
        ))}
      </StyledList>
    </Section>
  );
};

export default List;

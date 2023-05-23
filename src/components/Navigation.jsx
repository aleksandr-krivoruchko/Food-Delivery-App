import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: #35a7bd;
`;
const Navbar = styled.nav`
  padding: 1rem;
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`;
const Item = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
`;
const Link = styled(NavLink)`
  color: #fff;
  &.active {
    color: #ff9944;
    border-bottom: 1px solid #ff9944;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <Navbar>
        <List>
          <Item>
            <Link to="/">Shop</Link>
          </Item>
          <Item>
            <Link to="/cart">Shopping Cart</Link>
          </Item>
        </List>
      </Navbar>
    </Header>
  );
};

export default Navigation;

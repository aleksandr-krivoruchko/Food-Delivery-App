import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
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
  position: relative;
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
const CartIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.4rem;
  right: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.05rem;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.6);
  color: #fff;
  font-size: smaller;
`;

const Navigation = () => {
  const { totalItems } = useCart();

  return (
    <Header>
      <Navbar>
        <List>
          <Item>
            <Link to="/">Shop</Link>
          </Item>
          <Item>
            <Link to="/cart">Shopping Cart</Link>
            {totalItems > 0 && <CartIcon>{totalItems}</CartIcon>}
          </Item>
          <Item>
            <Link to="/history">History</Link>
          </Item>
        </List>
      </Navbar>
    </Header>
  );
};

export default Navigation;

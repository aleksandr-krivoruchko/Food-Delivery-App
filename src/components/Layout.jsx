import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  height: 90vh;
  background-color: #eeffff;
  padding: 0.8rem 0;
`;

const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default Layout;

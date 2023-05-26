import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../services/getData.js";
import { URL } from "../services/URL.js";
import OrderList from "../components/OrderList.jsx";
const Container = styled.div`
  display: flex;
`;

const History = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData(URL.ORDERS, setOrders);
  }, []);

  return (
    <Container>
      <OrderList orders={orders}>qwewqeqwe</OrderList>
    </Container>
  );
};

export default History;

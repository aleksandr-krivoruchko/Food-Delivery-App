import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img``;

const Message = styled.p`
  font-size: 2rem;
  text-align: center;
  color: red;
`;

const EmptyCart = () => {
  return (
    <Container>
      <Message>Your cart is empty</Message>
      <Image
        src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
        alt="Empty cart"
      />
    </Container>
  );
};

export default EmptyCart;

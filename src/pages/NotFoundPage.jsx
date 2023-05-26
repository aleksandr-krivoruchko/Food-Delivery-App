import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const NotFoundPage = () => {
  return (
    <Image
      src="https://media.istockphoto.com/id/115946149/photo/wrong-way-sign.jpg?s=612x612&w=0&k=20&c=l_jBWdPlMRn55FTU4ss8tu-VZFXKYbZ7odsbLY-lxyk="
      alt="Not found page"
    />
  );
};

export default NotFoundPage;

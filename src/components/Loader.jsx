import React from "react";
import styled from "styled-components";
import { FidgetSpinner } from "react-loader-spinner";

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Container>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </Container>
  );
};

export default Loader;

import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../components/ShopList";
import Places from "./Places";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().required("Required"),
  address: Yup.string(),
});

const Section = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 1rem;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Label = styled.label`
  font-size: medium;
`;
const Input = styled(Field)`
  width: 100%;
  height: 2rem;
  font-size: large;
  border-radius: 0.3rem;
`;
const Error = styled(ErrorMessage)`
  color: red;
`;
const Wrapper = styled.div`
  width: 80%;
`;

const OrderForm = ({ handleSubmit, setMarkerByAdress, mapRef }) => {
  return (
    <Section>
      <Formik
        initialValues={{ name: "", email: "", phone: "", address: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <StyledForm>
            <Wrapper>
              <Label>
                Name:
                <Input type="text" name="name" />{" "}
              </Label>
              <Error name="name" component="div" />
            </Wrapper>

            <Wrapper>
              <Label>
                Email: <Input type="email" name="email" />
              </Label>
              <Error name="email" component="div" />
            </Wrapper>

            <Wrapper>
              <Label>
                Phone: <Input type="tel" name="phone" />
              </Label>
              <Error name="phone" component="div" />
            </Wrapper>

            <Places setMarkerByAdress={setMarkerByAdress} mapRef={mapRef} />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Section>
  );
};

export default OrderForm;

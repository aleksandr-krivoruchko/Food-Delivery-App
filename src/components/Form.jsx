import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../components/ShopList";

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
  width: 50%;
  height: auto;
  padding: 1rem;
`;

const Title = styled.h2`
  text-align: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid red;
`;
const Label = styled.label`
  display: block;
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

const OrderForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Section>
      <Title>Fill in the form</Title>
      <Formik
        initialValues={{ name: "", email: "", phone: "", address: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <StyledForm>
            <div>
              <Label htmlFor="name">Name: </Label>
              <Input type="text" name="name" />
              <Error name="name" component="div" />
            </div>
            <div>
              <Label htmlFor="email">Email: </Label>
              <Input type="email" name="email" />
              <Error name="email" component="div" />
            </div>
            <div>
              <Label htmlFor="phone">Phone: </Label>
              <Input type="tel" name="phone" />
              <Error name="phone" component="div" />
            </div>
            <div>
              <Label htmlFor="address">Address: </Label>
              <Input type="text" name="address" />
            </div>

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

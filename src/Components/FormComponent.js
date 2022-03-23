import React, { Fragment } from "react";
import CreditCardForm from "./CreditCardForm";
import OverlappingCard from "./OverlappingCard";

const FormComponent = () => {
  return (
    <Fragment>
      <OverlappingCard />
      <CreditCardForm />
    </Fragment>
  );
};

export default FormComponent;

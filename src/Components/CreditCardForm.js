import React from "react";

const CreditCardForm = () => {
  return (
    <div>
      <form>
        <h1>CreditCardForm</h1>
        <input type="text" placeholder="Enter the card number" />
        <input type="text" placeholder="Enter the card holder name" />
        <input type="text" placeholder="Enter the expiry month/year" />
        <input type="password" placeholder="Enter CVV" />
      </form>
    </div>
  );
};

export default CreditCardForm;

import React from "react";

const CreditCardForm = () => {
  const submitCardHandler = (e) => {
    console.log("submitted");
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitCardHandler}>
        <h1>CreditCardForm</h1>
        <input type="text" placeholder="Enter the card number" />
        <input type="text" placeholder="Enter the card holder name" />
        <input type="text" placeholder="Enter the expiry month/year" />
        <input type="password" placeholder="Enter CVV" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreditCardForm;

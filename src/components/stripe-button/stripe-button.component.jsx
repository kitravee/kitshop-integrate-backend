import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE;
  const onToken = (token) => {
    //sent to backend
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      //   image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      alipay
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      email="kitravee.swk@gmail.com"
    />
  );
};

export default stripeButton;

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_FWDVi4kt5JKpiozYH3Y9JXxJ00fEp2NYoS";
  const onToken = (token) => {
    //sent to backend
    // console.log(token);
    // alert("Payment Successful");
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log(JSON.parse(err));
        alert("Issue with your payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="KITSHOP Clothing Ltd."
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

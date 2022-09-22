import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const stripeTestPromise = loadStripe(process.env.NEXT_PUBLIC_KEY);
console.log(stripeTestPromise);
function StripeContainer({ price }) {
  console.log(price);
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm price={price} />
    </Elements>
  );
}

export default StripeContainer;

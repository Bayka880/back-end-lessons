import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
function PaymentForm({ price }) {
  console.log(price);
  const stripe = useStripe();
  const elements = useElements();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const { err, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!err) {
      try {
        const { id } = paymentMethod;
        console.log(id);
        const response = await axios.post("http://localhost:4001/v1/payment", {
          amount: price,
          id,
        });
        if (response.data.success) {
          console.log("Successfull payment");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <CardElement />
        <button type="submit">PAY</button>
      </form>
    </div>
  );
}

export default PaymentForm;

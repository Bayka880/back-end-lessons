import React from "react";
import StripeContainer from "../../components/payment/StripeContainer";
export default function Paymnet() {
  return (
    <div>
      <StripeContainer price={1200} />
    </div>
  );
}

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

export default function Checkout({ subTotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  }
  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KaEuPHMhPy8KDcwCW1UusRVFeGT1CXxqz5yCpD5ZwDqHZw87Z9DKcGgXoh5oEnUH8ZVDbbrBPJclwmCkLjoyZSZ00ai3jesTm"
        currency="MYR"
      >
        <button className="pizza_btn">CHECKOUT</button>
      </StripeCheckout>
    </div>
  );
}

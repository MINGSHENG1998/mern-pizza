import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Checkout({ subTotal }) {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  }
  return (
    <div>
      {loading && <Loading/>}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}
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

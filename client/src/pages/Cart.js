import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";

export default function Cart() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>My Cart</h1>
          {cartItems.map((item) => {
            return (
              <div className="flex-container" key={item}>
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>
                    Quantity:
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    ></i>
                    <b>{item.quantity}</b>
                    <i
                      className="fa fa-minus"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    ></i>
                    <hr />
                  </h1>
                </div>

                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h1><b>SubTotal: RM {subTotal}</b></h1>
          <button className="pizza_btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

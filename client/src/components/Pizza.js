import React, { useState } from "react";

export default function Pizza({ pizzas }) {
  const { quantity, setQuantity } = useState(1);
  const { varient, setVarient } = useState("small");
  return (
    <div style={{ margin: "70px" }} className=" shadow-lg p-3 mb-5 bg-body rounded">
      <h1>{pizzas.name}</h1>
      <img src={pizza.image} className="img-fluid pizza_img" />
      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={() => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={() => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price: RM {pizza.prices[0][varient] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="pizza_btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

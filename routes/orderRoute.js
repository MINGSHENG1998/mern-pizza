const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const { v4: uuidv4 } = require("uuid");
const key = require("./../keys.json");
const stripe = require("stripe")(
  key.StripePrivateKey
);

router.post("/place",  async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "MYR",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      res.send("Payment Success!");
    } else {
      res.send("Payment Failed!");
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;

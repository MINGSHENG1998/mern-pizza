const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KaEuPHMhPy8KDcwAY2sGEJQcC1IU0k5AFmJTWvYiYjPdBUehvHTIlsbzs9MfbBax6qvxbGocxTIH0b8noK300A800p3V1lvi0"
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

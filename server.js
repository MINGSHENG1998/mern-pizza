const express = require("express");
const db = require("./db");
const app = express();
const Pizza = require("./models/pizzaModel");
const pizzasRoute = require("./routes/pizzasRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working: " + port);
});

app.use("/api/pizzas/", pizzasRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port");

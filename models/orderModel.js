const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
      
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("orders", orderSchema);
const mongoose = require("mongoose");
const key = require("./keys.json");

var mongoURL = key.mongoUrl;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => console.log("Mongo DB Connected Successful!"));

db.on("error", () => console.log("Mongo DB Connection Failed!"));

module.exports = mongoose;

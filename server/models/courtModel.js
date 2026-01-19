const mongoose = require("mongoose");

const courtModel = new mongoose.Schema({
  name: String,
  address: String,
  price: String,
  location: { type: String, ref: "Location" },
  sports: [{ type: String, ref: "Sport" }],
  images: [String],
});

module.exports = mongoose.model("Court", courtModel);

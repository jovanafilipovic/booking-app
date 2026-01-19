const mongoose = require("mongoose");

const locationModel = new mongoose.Schema({
  _id: String,
  name: String,
});

module.exports = mongoose.model("Location", locationModel);

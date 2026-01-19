const mongoose = require("mongoose");

const sportModel = new mongoose.Schema({
  _id: String,
  name: String,
});

module.exports = mongoose.model("Sport", sportModel);

const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/booking";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const close = () => {
  return mongoose.disconnect();
};

module.exports = { connect, close };

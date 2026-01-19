const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/appRoute.js");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/booking")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const port = 3002;

app.use("/api", routes);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

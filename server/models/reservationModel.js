const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  court: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },
  date: { type: String, required: true },
  timeSlot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TimeSlot",
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);

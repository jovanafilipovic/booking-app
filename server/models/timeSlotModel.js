const mongoose = require("mongoose");

const timeSlotModel = new mongoose.Schema({
  courtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Court",
    required: true,
  },
  date: { type: String, required: true },
  slots: [
    {
      time: { type: String, required: true },
      available: { type: Boolean, required: true },
    },
  ],
});

module.exports = mongoose.model("TimeSlot", timeSlotModel);

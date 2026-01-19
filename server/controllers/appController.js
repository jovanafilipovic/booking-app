const Location = require("../models/locationModel.js");
const Sport = require("../models/sportModel.js");
const Court = require("../models/courtModel.js");
const TimeSlot = require("../models/timeSlotModel.js");
const User = require("../models/userModel.js");
const Reservation = require("../models/reservationModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendConfirmationEmail } = require("../controllers/mailer.js");

const SECRET_KEY = process.env.SECRET_KEY;

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.send({ locations });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch locations" });
  }
};

const getSports = async (req, res) => {
  try {
    const sports = await Sport.find();
    res.send({ sports });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch sports" });
  }
};

const getCourts = async (req, res) => {
  try {
    const courts = await Court.find();
    res.send({ courts });
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch courts" });
  }
};

const getCourtById = async (req, res) => {
  const { courtId } = req.params;
  try {
    const court = await Court.findById(courtId);
    if (!court) {
      return res.status(404).send({ error: "Court not found" });
    }
    res.send(court);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch court details" });
    console.log("");
  }
};

const getTimeSlots = async (req, res) => {
  const { courtId } = req.query;

  try {
    const timeSlots = await TimeSlot.findOne({ courtId });
    res.json({ timeSlots: timeSlots ? timeSlots.slots : [] });
  } catch (error) {
    res.status(500).send("Error fetching time slots");
  }
};

const insertUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
      return res.status(400).send({ error: "Username already used" });
    }

    const existingUserEmail = await User.findOne({ email });

    if (existingUserEmail) {
      return res.status(400).send({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).send("Error while registration");
  }
};

const getUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Wrong password" });
    }

    const token = jwt.sign(
      { username: user.username, id: user._id },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email },
      accessToken: token,
    });
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ error: "Error finding user" });
  }
};

const insertReservation = async (req, res) => {
  const { user, court, date, timeSlotId } = req.body;

  try {
    const findUser = await User.findById(user);
    if (!findUser) {
      return res.status(400).send({ message: "User not found" });
    }
    const findCourt = await Court.findById(court);
    if (!findCourt) {
      return res.status(400).send({ message: "Court not found" });
    }
    const findTimeSlot = await TimeSlot.findOne({
      courtId: findCourt._id,
    });

    if (!findTimeSlot) {
      return res.status(400).send({ message: "Timeslot not found" });
    }

    const selectedSlot = findTimeSlot.slots.find(
      (slot) => slot.time === timeSlotId
    );

    if (!selectedSlot) {
      return res.status(400).send({ message: "Selected timeslot not found" });
    }

    if (!selectedSlot.available) {
      return res
        .status(400)
        .send({ message: "Selected timeslot is not available" });
    }

    const newReservation = new Reservation({
      user: findUser._id,
      court: findCourt._id,
      date: date,
      timeSlot: selectedSlot._id,
    });

    await newReservation.save();

    selectedSlot.available = false;
    await findTimeSlot.save();
    sendConfirmationEmail(findUser.email, {
      court: findCourt.name,
      address: findCourt.address,
      date,
      time: selectedSlot.time,
    });

    res.status(201).send({ message: "Reservation successfully saved" });
  } catch (error) {
    console.error("Error while saving reservation:", error);
    res.status(500).send("Error while saving reservation");
  }
};

module.exports = {
  getLocations,
  getSports,
  getCourts,
  getCourtById,
  getTimeSlots,
  insertUser,
  getUser,
  insertReservation,
};

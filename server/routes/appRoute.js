const { Router } = require("express");
const {
  getLocations,
  getSports,
  getCourts,
  getTimeSlots,
  getCourtById,
  insertUser,
  getUser,
  insertReservation,
} = require("../controllers/appController.js");

const router = Router();
const authenticateToken = require("../controllers/authMiddleware.js");

router.get("/locations", getLocations);
router.get("/sports", getSports);
router.get("/timeSlots", getTimeSlots);
router.get("/courts", getCourts);
router.get("/courts/:courtId", getCourtById);
router.post("/signup", insertUser);
router.post("/login", getUser);
router.post("/reservations", authenticateToken, insertReservation);

module.exports = router;

const express = require('express');
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require('../controllers/Workout');

const router = express.Router();

//GET
router.get("/", getWorkouts);

//GET SINGLE WORKOUT
router.get("/:id", getWorkout);

//POST A NEW WORKOUT
router.post("/", createWorkout);

//DELETE A NEW WORKOUT
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE A WORKOUT" });
});

//UPDATE A NEW WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE A WORKOUT" });
});

module.exports = router;

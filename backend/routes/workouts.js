const express = require('express');
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/Workout');

const router = express.Router();

//GET
router.get("/", getWorkouts);

//GET SINGLE WORKOUT
router.get("/:id", getWorkout);

//POST A NEW WORKOUT
router.post("/", createWorkout);

//DELETE A NEW WORKOUT
router.delete("/:id", deleteWorkout);

//UPDATE A NEW WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router;

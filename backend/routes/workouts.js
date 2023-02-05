const express = require('express');
const {
  createWorkout,
} = require('../controllers/Workout');

const router = express.Router();

//GET
router.get("/", (req, res) => {
  res.json({ mssg: "GET ALL WORKOUTS!!!" });
});

//GET SINGLE WORKOUT
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET A SINGLE WORKOUT" });
});

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

const express = require("express");
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
router.post("/", async (req, res) => {
  const { title, sets, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, sets, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE A NEW WORKOUT
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE A WORKOUT" });
});

//UPDATE A NEW WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE A WORKOUT" });
});

module.exports = router;

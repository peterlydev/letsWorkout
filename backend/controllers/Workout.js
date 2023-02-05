const Workout = require("../models/Workout");

// Get all workouts

// Get a single workout

//create new workout
const createWorkout = async (req, res) => {
  const { title, sets, reps, load } = req.body;

  //Adding Doc to DB
  try {
    const workout = await Workout.create({ title, sets, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout

//update a workout

module.exports = {
    createWorkout
}

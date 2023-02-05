const Workout = require("../models/Workout");
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

const getWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout);
}

//create new workout
const createWorkout = async (req, res) => {
  const { title, sets, reps, load } = req.body;

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!sets) {
    emptyFields.push('sets')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  //Adding Doc to DB
  try {
    const workout = await Workout.create({ title, sets, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    
    res.status(200).json(workout);
}

//update a workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
};

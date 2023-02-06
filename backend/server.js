require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workouts = require("./routes/workouts");
const users = require('./routes/user');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workouts);
app.use('/api/user', users)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

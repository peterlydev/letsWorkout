require('dotenv').config();
const express = require('express');
const workouts = require('./routes/workouts');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}); 

app.use('/api/workouts', workouts);

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
});

process.env

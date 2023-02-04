require('dotenv').config();
const express = require('express');
const workouts = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}); 

app.get('/api/workouts', workouts);

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
});

process.env

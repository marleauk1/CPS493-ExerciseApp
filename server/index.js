const express = require('express');
const path = require('path');
require('dotenv').config();

const users = require('./controllers/users');
const exerciseTypes = require('./controllers/ExerciseTypes')
const workouts = require('./controllers/workouts');

// Middleware
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../static')))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

/* Authentication
app.use(function (req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if (arr.length > 1 && arr[1] != null) {
    req.userId = +arr[1];
  }
  next();
});
*/

// API
app.get('/', (req, res) => {
  res.send('Hello World! You requested ' + req.url)
})

app.use('/users', users);
app.use('/workouts', workouts);
app.use('/exerciseTypes', exerciseTypes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ message: err.message })
})


// Init
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
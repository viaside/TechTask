const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const User = require('./queries/User');
const Schedule = require('./queries/Schedule');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/user', User.getUser)
app.get('/user/:id', User.getUserById)
app.post('/user', User.createUser)
app.put('/user/:id', User.updateUser)
app.delete('/user/:id', User.deleteUser)

app.get('/schedule', Schedule.getSchedule)
app.get('/schedule/:date', Schedule.getScheduleByMounth)
app.post('/schedule', Schedule.createSchedule)
app.put('/schedule/:id', Schedule.updateSchedule)
app.delete('/schedule/:id', Schedule.deleteSchedule)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
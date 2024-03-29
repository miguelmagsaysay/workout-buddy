require("dotenv").config();

const express = require("express");
const workoutRoutes = require('./routes/workouts')
//express app
const app = express();
const mongoose = require('mongoose')
//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes  
app.use('/api/workouts',workoutRoutes)

// COnnect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    //listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT)
})

  })
  .catch((error) =>{
    console.log(error)
  })



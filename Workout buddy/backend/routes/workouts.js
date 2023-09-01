const express = require('express');
const{
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all
router.get("/", getWorkouts)

//GET Single
router.get("/:id", getWorkout);

//CREATE
router.post('/', createWorkout);

//DELETE
router.delete("/:id",deleteWorkout);

//UPDATE
router.patch("/:id",updateWorkout);

//Export data
module.exports = router;

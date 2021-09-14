const router = require("express").Router();
const Workout = require("../models/workout");

// view total duration
router.get("api/workouts", ({ body }, res) => {
const findWorkouts = Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration"}}},
]);
try {
    res.status(200).json(findWorkouts);
} catch {
    res.status(500).json(err);
}
});
// add excercises
router.put("api/workouts/:id", ({ body }, res) => {
const updateWorkout = Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
        $push: { exercises: req.body },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
);
try {
    res.status(200).json(updateWorkout);
} catch {
    res.status(500).json(err);
}
});
// create new workout
router.post("api/workouts", ({ body }, res) => {
    const createWorkout = Workout.create(req.body);
try {
    res.status(200).json(createWorkout);
} catch{
    res.status(500).json(err);
}
});
// view combined weight
router.get("api/workouts/range", ({ body }, res) => {
    const findWorkoutRange = Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercise.duration"}}},
    ]);
    try {
        res.status(200).json(findWorkoutRange);
    } catch {
        res.status(500).json(err);
    }
});
// Add exercises to the most recent workout plan.

// Add new exercises to a new workout plan.

// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

// View the total duration of each workout from the past seven workouts on the `stats` page.

module.exports = router;
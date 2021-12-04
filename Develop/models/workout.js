const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: false,
      },
      reps: {
        type: Number,
        required: false,
      },
      sets: {
        type: Number,
        required: false,
      },
      distance: {
        type: Number,
        required: false,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
}, 

{
  toJSON: {
    virtuals: true
  },
});

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((totalDuration, exercise) => {
    return totalDuration + exercise.duration
  }, 0)
});

module.exports = Workout;
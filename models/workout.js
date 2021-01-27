const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [{

    type: {
      type: String,
      required: "Enter a workout type"
    },
     name: {
      type: String,
      required: "Enter a workout name"
    },
    duration: {
      type: Number,
      required: "Enter a how long the workout take"
    },
    distance: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
  }
  ],

  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

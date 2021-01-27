const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  // Transaction.insertMany(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .limit(7)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id" , (req, res) => {
  //req.params.id
  Workout.find({id:req.params.id},
    { $push: { exercises: req.body } },
    )
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

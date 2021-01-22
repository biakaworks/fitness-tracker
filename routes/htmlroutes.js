
var path = require('path');
var router = require('express').Router();


router.get('/stats', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  router.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });



module.exports = router;

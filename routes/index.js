var express = require('express');
var router = express.Router();

router.get('/:something', function(req, res, next) {
  res.render('index', { title: 'lorem ipsum all the things' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Something else' });
});

module.exports = router;

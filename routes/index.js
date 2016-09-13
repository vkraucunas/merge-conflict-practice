var express = require('express');
var router = express.Router();

router.get('/:something', function(req, res, next) {
  res.render('index', { title: 'lorem ipsum all the things' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.path === "/") {
    res.render('index', { title: 'My password is sheepdog' });
    return;
  }
  res.send(200);
});

module.exports = router;

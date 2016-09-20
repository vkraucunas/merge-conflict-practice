var express = require('express');
var router = express.Router();

router.get('/:something', function(req, res, next) {
  res.render('index', { title: 'all things lorem ipsum', reallyAwesomePropertySomePmWanted: 'bacon bacon bacon bacon' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.path === "/") {
    res.render('index', { title: 'My password is sheepdog' });
    return;
  }
  res.send(201);
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
    next();
});

router.put('/', function(req, res, next) {
    next();
});

router.post('/', function(req, res, next) {
    next();
});

router.delete('/', function(req, res, next) {
    next();
});

module.exports = router;

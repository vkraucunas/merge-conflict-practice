var express = require('express');
var router = express.Router();

/* GET accounts listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.put('/', function (req, res, next) {
    throw Error('not implemented');
});

router.post('/', function (req, res, next) {
    throw Error('not implemented');
});

router.delete('/', function (req, res, next) {
    throw Error('not implemented');
});

module.exports = router;

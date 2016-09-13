var express = require('express');
var router = express.Router();

/* GET accounts listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.put('/', function(req, res, next) {
    res.send('We don\'t have this implemented');
    next();
});

router.post('/', function(req, res, next) {
   res.send('Put complete.');
});

router.delete('/', function(req, res, next) {
    res.send('Delete complete.');
});

module.exports = router;

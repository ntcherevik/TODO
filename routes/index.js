var express = require('express');
var router = express.Router();
var todo = require('../modules/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', todo);
});

router.get('/todo', function(req, res, next) {
    res.render('todo', todo);
});

module.exports = router;

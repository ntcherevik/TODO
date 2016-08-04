var express = require('express');
var router = express.Router();
var todo = require('../modules/todo');
var uuid = require('uuid');

router.get('/items', function(req, res, next) {
    res.json(todo.todoList);
});

router.get('/items/:id', function(req, res, next) {
    var id = req.params.id;
    var item = todo.todoList.find(function(item) {
        return item.id === id;
    });
    if (item) {
        res.json(item);
    } else {
        res.sendStatus(404);
    }
});

router.post('/items/:id', function(req, res, next) {
    var id = req.params.id;
    var item = todo.todoList.find(function(item) {
        return item.id === id;
    });
    if (item) {
        item.item = req.body.item;
        item.date = req.body.date;
        res.json(item);
    } else {
        res.sendStatus(404);
    }
});

router.post('/items', function(req, res, next) {
    var item = {
        id: uuid.v4(),
        item: req.body.item,
        date: req.body.date
    };
    todo.todoList.push(item);
    res.json(item)
});

module.exports = router;

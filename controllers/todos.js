const express = require('express')
const toDoController = express.Router()
const ToDo = require('../models/todo')

//Index Route

toDoController.get('/', (req, res) => {
    ToDo.find({}, (error, allToDos) => {
        res.render('Index',
        {toDos: allToDos})
    })  
})

toDoController.post('/', (req, res) => {
    req.body.done === 'on'
        ? req.body.done = true
        : req.body.done = false;
    console.log(req.body)
    ToDo.create(req.body), (error, createdToDo) => {
        res.redirect('/todo')
    }
})

toDoController.delete('/:id', (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, (error, todo) => {
        res.redirect('/todo')
    })
})
module.exports = toDoController
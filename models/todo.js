const mongoose = require('mongoose')
const {Schema} = mongoose

const toDoSchema = new Schema({
    todo: String,
    done: Boolean
})
const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports= ToDo
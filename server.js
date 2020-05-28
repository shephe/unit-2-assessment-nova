const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const toDoController = require('./controllers/todos.js')
const methodOverride = require('method-override')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/assessment2'
mongoose.connect(MONGODB_URI, {useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true})

db.on('error', (err) => console.log(err.message + 'mongo isnt running'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/todo', toDoController)
app.get('/', (req, res) => {
    res.redirect('/todo')
})

app.listen(3000, () => console.log('listening on port 3000'))
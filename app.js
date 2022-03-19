const express = require('express');
const app = express();
const todoRouter = require('./routes/todoRouter');
app.use(express.json()); // enable the server side to parse json type
app.use(express.urlencoded({ extended: false })) // parse request body

require('./models/TodoModel'); // import the models and inside it, connects to the database

app.use('/api/todos', todoRouter);


module.exports = app;
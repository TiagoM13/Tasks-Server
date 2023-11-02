const express = require('express');
const tasksController = require('./controllers/tasks.controller');

const route = express.Router();

route.get('/tasks', tasksController.getAllTasks);

module.exports = route;
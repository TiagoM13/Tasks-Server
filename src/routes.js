const express = require('express');
const tasksController = require('./controllers/tasks.controller');
const taskMiddleware = require('./middlewares/tasks.middleware');

const route = express.Router();

route.get('/tasks', tasksController.getAllTasks);
route.post('/tasks', taskMiddleware.validateFieldTitle, tasksController.createTask);
route.delete('/tasks/:id', tasksController.deleteTask);
route.put('/tasks/:id',
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  tasksController.updateTask
);

module.exports = route;
const express = require('express');
const todoRoutes = express.Router();
const todosController = require('../controllers/todos-controller');

todoRoutes.get('/', todosController.index);

todoRoutes.post('/', todosController.create);

todoRoutes.get('/add', (req, res) => {
   res.render('todos/todos-add');
});

todoRoutes.get('/:id', todosController.show);
todoRoutes.delete('/:id', todosController.delete);
todoRoutes.put('/:id', todosController.update);

module.exports = todoRoutes;

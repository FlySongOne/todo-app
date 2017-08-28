// model
// importing pg promise
const db = require('../db/config');
//creating an empty object name Movie
const Todo = {};

Todo.findAll = () => {
  return db.query('SELECT * FROM todos');
}

Todo.findById = (id) =>{
  return db.oneOrNone(
    `
      SELECT * FROM todos
      WHERE id = $1
    `,[id]);
}

Todo.create = (todos) => {
   return db.one(`
     INSERT INTO todos
     (title, status, category)
     VALUES ($1, $2, $3)
     RETURNING *
   `, [todos.title, todos.status, todos.category]);
 }

Todo.update = (todos, id) => {
  return db.one(`
     UPDATE todos SET
     title = $1,
     relese_year = $2,
     director = $3
     WHERE id = $4
     RETURNING *
   `, [todos.title, todos.status, todos.category, id]);
 }

Todo.destroy = (id) => {
   return db.none(`
     DELETE FROM todos
     WHERE id = $1
   `, [id]);
}

module.exports = Todo;

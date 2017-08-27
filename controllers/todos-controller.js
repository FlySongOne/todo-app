//controller
// import movies model
const Todo = require('../models/todos')
//declare an empty moviesController object
const todosController = {};

todosController.index = (req, res) => {
  Todo.findAll()
    .then(todos=> {
        res.render('todos/todos-index',{
     // res.json({
        message: 'ok',
        data: todos,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
/*
todosController.create = (req, res) => {
   Todo.create({
     title: req.body.title,
     status: req.body.status,
     category: req.body.category
   }).then(todo => {
   //  res.render('todos/todos-add');
     res.redirect('/todos');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
};
*/
todosController.show = (req,res) => {
   Todo.findById(req.params.id)
   .then(todos =>{
      res.render('todos/todos-single',{
         message:'ok',
         data: todos,
      });
   }).catch(err=>{
      console.log(err);
      res.status(500).json(err);
   })
};

todosController.create = (req, res) => {
   Todo.create({
     title: req.body.title,
     status: req.body.status,
     category: req.body.category
   }).then(todo => {
   //  res.render('todos/todos-add');
     res.redirect('/todos');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
};


todosController.delete = (req, res) => {
   Todo.destroy(req.params.id)
     .then(() => {
       res.redirect('/todos');
     }).catch(err => {
       console.log(err);
      res.status(500).json(err);
     });
};

module.exports = todosController;

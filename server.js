// import express
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const todoRoutes = require ('./routes/todo-routes');
// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.render is to render template.
  // res.send is to send data
  res.render('index', { message:"Hello World!"});
});

app.use('/todos', todoRoutes);

const port = process.env.PORT || 3000;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});

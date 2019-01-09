'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];
let moviedb = [];


function Book(data){
  this.name = data.name;
  this.author = data.author;
  this.article = data.article;
}

function Movies(data){
  this.title = data.title;
  this.director = data.director;
  this.reviews = data.reviews;
}

app.use(express.json());



app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/posts', (req,res,next) => {
  let count = db.length;
  let results = db;
  console.log(db);
  res.json({count,results});
  next();
});

app.get('/movies', (req,res,next) => {
  let count = moviedb.length;
  let results = moviedb;
  console.log(moviedb);
  res.json({count,results});
  next();
});


app.get('/posts/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
  next();
});

app.get('/movies/:id', (req,res,next) => {
  let id = req.params.id;
  let record = moviedb.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
  next();
});

app.post('/posts', typeCheck, requiredFields, (req,res,next) => {

  let record = new Book(req.body);
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
  next();
});

app.post('/movies', (req,res,next) => {

  let record = new Movies(req.body);
  record.id = db.length + 1;
  moviedb.push(record);
  res.json(record);
  next();
});

app.put('/posts/:id', typeCheck, requiredFields, (req,res,next) => {

  let record = new Book(req.body);
  let ident = parseInt(req.params.id);
  let location;


  for(let i = 0; i < db.length; i++){
    if(db[i].id === ident){
      db[i] = record;
      db[i].id = ident;
      location = i;
    }
  }
  res.json(db[location]);
  next();
});

app.put('/movies/:id', typeMovieCheck, requiredMovieFields, (req,res,next) => {

  let record = new Movies(req.body);
  let ident = parseInt(req.params.id);
  let location;


  for(let i = 0; i < moviedb.length; i++){
    if(moviedb[i].id === ident){
      moviedb[i] = record;
      moviedb[i].id = ident;
      location = i;
    }
  }
  res.json(moviedb[location]);
  next();
});


app.delete('/posts/:id', (req,res,next) => {
  let id = parseInt(req.params.id);
  db = db.filter((record, idx) => record.id !== id);
  res.status(200).send({});
  next();
});

app.delete('/movies/:id', (req,res,next) => {
  let id = parseInt(req.params.id);
  moviedb = moviedb.filter((record, idx) => record.id !== id);
  res.status(200).send({});
  next();
});



function typeCheck(req, res, next){
  if(typeof req.body.name === 'string' && typeof req.body.author === 'string' && typeof req.body.article === 'string'){
    next();
  }
  res.status(417).send('417 Expectation Failed: types must match expected field inputs');
}

function typeMovieCheck(req, res, next){
  if(typeof req.body.title === 'string' && typeof req.body.director === 'string' && typeof req.body.reviews === 'string'){
    next();
  }
  res.status(417).send('417 Expectation Failed: types must match expected field inputs');
}

function requiredFields(req, res, next){
  if(req.body.name && req.body.author && req.body.article){
    next();
  }
  res.status(400).send('400 Bad Request: all fields need an entry');
}

function requiredMovieFields(req, res, next){
  if(req.body.title && req.body.director && req.body.reviews){
    next();
  }
  res.status(400).send('400 Bad Request: all fields need an entry');
}



module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};


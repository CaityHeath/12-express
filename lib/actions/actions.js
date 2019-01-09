'use strict';

let db = require('../models/book');
let mdb = require('../models/movies');
let b = require('../models/book');
let m = require('../models/movies');

let bookGet = (req,res,next) => {
  let count = db.db.length;
  let results = db.db;
  console.log(db.db);
  res.json({count,results});
  next();
};

let movieGet = (req,res,next) => {
  let count = mdb.moviedb.length;
  let results = mdb.moviedb;
  console.log(mdb.moviedb);
  res.json({count,results});
  next();
};


let bookPost = (req,res,next) => {

  let record = new b.Book(req.body);
  record.id = db.db.length + 1;
  db.db.push(record);
  res.json(record);
  next();
};

let moviePost = (req,res,next) => {

  let record = new m.Movies(req.body);
  record.id = mdb.moviedb.length + 1;
  mdb.moviedb.push(record);
  res.json(record);
  next();
};

let getBookById = (req,res,next) => {
  let id = req.params.id;
  let record = db.db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
  next();
};

let getMovieById = (req,res,next) => {
  let id = req.params.id;
  let record = m.moviedb.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
  next();
};

let putBook = (req,res,next) => {

  let record = new b.Book(req.body);
  let ident = parseInt(req.params.id);
  let location;


  for(let i = 0; i < db.db.length; i++){
    if(db.db[i].id === ident){
      db.db[i] = record;
      db.db[i].id = ident;
      location = i;
    }
  }
  res.json(db.db[location]);
  next();
};

let putMovie = (req,res,next) => {

  let record = new m.Movies(req.body);
  let ident = parseInt(req.params.id);
  let location;


  for(let i = 0; i < mdb.moviedb.length; i++){
    if(mdb.moviedb[i].id === ident){
      mdb.moviedb[i] = record;
      mdb.moviedb[i].id = ident;
      location = i;
    }
  }
  res.json(mdb.moviedb[location]);
  next();
};

let bookDelete = (req,res,next) => {
  let id = parseInt(req.params.id);
  db.db = db.db.filter((record, idx) => record.id !== id);
  res.status(200).send({});
  next();
};

let movieDelete = (req,res,next) => {
  let id = parseInt(req.params.id);
  mdb.moviedb = mdb.moviedb.filter((record, idx) => record.id !== id);
  res.status(200).send({});
  next();
};


module.exports = {bookGet, movieGet, bookPost, moviePost, getBookById, getMovieById, putBook, putMovie, bookDelete, movieDelete};
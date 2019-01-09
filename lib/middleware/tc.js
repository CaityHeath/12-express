'use strict';

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


module.exports = {typeCheck, typeMovieCheck, requiredFields, requiredMovieFields};
'use strict';

function Movies(data){
  this.title = data.title;
  this.director = data.director;
  this.reviews = data.reviews;
}

let moviedb = [];


module.exports = {Movies, moviedb};

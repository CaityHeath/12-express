'use strict';

function Book(data){
  this.name = data.name;
  this.author = data.author;
  this.article = data.article;
}

let db = [];

module.exports = {Book, db};

'use strict';

const express = require('express');
const tc = require('./middleware/tc');
const action = require('./actions/actions');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/posts', action.bookGet);
app.get('/movies', action.movieGet);

app.get('/posts/:id', action.getBookById);
app.get('/movies/:id', action.getMovieById);

app.post('/posts', tc.typeCheck, tc.requiredFields, action.bookPost);
app.post('/movies', tc.typeMovieCheck, tc.requiredMovieFields, action.moviePost);

app.put('/posts/:id', tc.typeCheck, tc.requiredFields, action.putBook);
app.put('/movies/:id', tc.typeMovieCheck, tc.requiredMovieFields, action.putMovie);

app.delete('/posts/:id', action.bookDelete);
app.delete('/movies/:id', action.movieDelete);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};


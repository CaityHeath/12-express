![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Express

### Author: Caity Heath and Becca Lee

### Links and Resources
![Build Status](https://travis-ci.com/CaityHeath/12-express.svg?branch=master)
* [repo](https://github.com/CaityHeath/12-express)
* [travis](https://travis-ci.com/CaityHeath/12-express)

### Modules
- `actions.js` contains all the GET, PUT, DELETE, and POST functions for books and movies
- `tc.js` contains the type checking and required fields functions for books and movies
- `book.js` contains the book constructor function
- `movies.js` contains the movie constructor function
- `server.js` contains server functionality and sets all the routes

### Setup
#### `.env` requirements
* `PORT` - 8080 or defined by ENV

#### Running the app
* install httpie and nodemon
* in a terminal window, run the server file with nodemon `nodemon lib/server.js`
* in another terminal window, run the port with httpie `http :8080`
* For the GET endpoint, you can either see all books/movies `/posts` or `/movies` or request a specific id (ie `posts/1`). 
  * To view, enter `http GET :8080/posts` or `http GET :8080/posts/1`. Sub movies for posts in the routes to see movie db daata
  * Returns a JSON object with all books/movies or a selected record in it.
* For the POST endpoint, you can add an item to books (`/posts`) or movies(`/movies`). 
  * To add a book, enter `echo '{"name":"Book Name","author":"Author Name","article":"Article Info"}' |http POST :8080/posts`
  * To add a movie, enter `echo '{"title":"Movie Title","director":"Movie Director","review":"Review Info"}' |http POST :8080/movies`
  * Adds a JSON object to the books or movies db.
* For the PUT endpoint, you can update a record in books (`/posts`) or movies (`/movies`). 
  * * To update a book, enter `echo '{"name":"New Book Name","author":" New Author Name","article":" New Article Info"}' |http PUT :8080/posts`
  * To update a movie, enter `echo '{"title":"New Movie Title","director":"New Movie Director","review":"New Review Info"}' |http PUT :8080/movies`
* For the DELETE endpoint, you can delete a specific record in books (`books`) or (`movies`).
  * To delete a record, enter `http DELETE :8080/movies/1`. For a books record, sub posts for movies. You can enter any existing record number to delete.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

Testing, tdb. Code is not yet 100% complete

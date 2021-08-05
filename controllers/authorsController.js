// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();

// Base path - /authors

// Authors Index Route
router.get('/', (req, res) => {
  // Go get the authors data

  res.render('authors/authorsIndex.ejs');
});


// Authors New Route - Show a form for adding a new author
// - Create a route for localhost:4000/authors/new
// - Have that route render a template for New Author
router.get('/new', (req, res) => {
  res.render('authors/authorsNew.ejs');
})

// Authors Create Route - Create a new author!
// Activity
// - Create a route for a POST request to localhost:4000/authors
// - Have the route res.send a helpful string!
router.post('/', (req, res) => {
  // console.log(req.body);

  // Add the new author to the DB
  db.Author.create(req.body, (err, createdAuthor) => {
    if (err) return console.log(err);

    console.log(createdAuthor);

    res.redirect('/authors');
  });
})

module.exports = router;
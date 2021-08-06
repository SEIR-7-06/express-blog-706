// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// Base path - /authors

// Authors Index Route - Shows all authors
router.get('/', (req, res) => {
  // Go get the authors data
  db.Author.find({}, (err, allAuthors) => {
    if (err) return console.log(err);

    res.render('authors/authorsIndex.ejs', {
      allAuthors: allAuthors
    });
  });
});


// Authors New Route - Shows a form for adding a new author
router.get('/new', (req, res) => {
  res.render('authors/authorsNew.ejs');
});


// Authors Show Route - Show a single Author
router.get('/:id', (req, res) => {
	db.Author.findById(req.params.id, (err, foundAuthor) => {
		if (err) return console.log(err);

		res.render('authors/authorsShow.ejs', { author: foundAuthor });
	});
});



// Authors Create Route - Handles creating a new author
router.post('/', (req, res) => {
  // console.log(req.body);

  // Add the new author to the DB
  db.Author.create(req.body, (err, createdAuthor) => {
    if (err) return console.log(err);

    // console.log(createdAuthor);

    res.redirect('/authors');
  });
});


// Authors Delete Route - Remove an author
router.delete('/:id', (req, res) => {
	db.Author.findByIdAndRemove(req.params.id, (err) => {
		if (err) return console.log(err);

		res.redirect('/authors');
	});
});


module.exports = router;
// In this file we will get some extra practice writing Mongoose queries.
// Included are notes on how we can use these queries.

// Mongoose Documentation for Queries
// https://mongoosejs.com/docs/queries.html
const db = require('./models/index.js');

// Get us all the authors
// Takes in 2 arguments
// 1. An object specifying what we want to find
// 2. A function that will be called when the response returns from the DB 
db.Author.find({}, (err, allAuthors) => {
  if (err) return console.log(err);
  
  console.log(allAuthors);
});

// // Get us a single author by it's id
// Takes 2 arguments
// 1. The id of the author we are looking for
// 2. A function that will be called when the response returns from the DB
db.Author.findById('610d4a35b872e876d289aab3', (err, foundAuthor) => {
    if (err) return console.log(err);
  
  console.log(foundAuthor);
})

// // Create an author
// Takes in 2 arguments
// 1. An object for the new author we want to create
// 2. A function that will be called when the response returns from the DB
db.Author.create({ authorName: 'Frank Herbert' }, (err, createdAuthor) => {
  if (err) return console.log(err);

  console.log(createdAuthor);
})

// // Find an author by it's id and delete it
// Takes 2 arguments
// - The id of the author we want to remove
// - A function that will be called when the response returns from the DB
db.Author.findByIdAndRemove('610d4a35b872e876d289aab3', (err, deletedAuthor) => {
  if (err) return console.log(err);

  console.log(deletedAuthor);
})

// // Find an author by it's id and update it
// db.Author.findByIdAndUpdate()

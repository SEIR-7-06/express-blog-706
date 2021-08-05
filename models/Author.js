const mongoose = require('mongoose');

// Set the Schema - Defines what we want an Author to look like
const authorSchema = new mongoose.Schema({
  authorName: { type: String, required: true }
});

// Create the Author model - our interface for working with Authors
const Author = mongoose.model('Author', authorSchema);

// Export the model
module.exports = Author;
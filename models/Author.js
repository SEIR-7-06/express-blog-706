const mongoose = require('mongoose');

// Set the Schema - Defines what we want an Author to look like
const authorSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article'
    }
  ]
});

/*
Example of what an author will look like

{
  authorName: 'John Steinbeck',
  articles: ['sf9w2kfsk29fksj3fk2', 'sdkfl29dlf0s0dk3']
}
*/

// Create the Author model - our interface for working with Authors
const Author = mongoose.model('Author', authorSchema);

// Export the model
module.exports = Author;
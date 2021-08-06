const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/blogdb';

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

// Making the Author model available from this file
// Making the Article model available from this file
module.exports = {
  Author: require('./Author.js'),
  Article: require('./Article.js')
}
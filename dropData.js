const db = require('./models/index.js');

db.Author.deleteMany({}, (err) => {
  if (err) return console.log(err);

  db.Article.deleteMany({}, (err) => {
    if (err) return console.log(err);

    console.log('Deleted all authors and articles');

    process.exit();
  });
});

const express = require('express');
const app = express();
const PORT = 4000;

// Home Page Route
app.get('/', (req, res) => {
  res.render('index.ejs');
})

// Activity
// 1. Create an authorsIndex.ejs in views/authors
// 2. Render the template in the route for /authors

app.get('/authors', (req, res) => {
  res.render('authors/authorsIndex.ejs');
});

// Create a route for /test
// app.get('/test', (req, res) => {
//   res.send('You hit the /test route!')
// })

// Start our Server
app.listen(PORT, () => {
  console.log(`Your server is running on localhost:${PORT} 🚀`);
})
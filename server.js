/////////////////// Require Statements /////////////////
const express = require('express');
const authorsController = require('./controllers/authorsController.js');

/////////////////// Configuration //////////////////////
const app = express();
const PORT = 4000;
app.set('view engine', 'ejs');


/////////////////// Middleware /////////////////////////
// Sits between the request and the rest of our routes
// Add additional functionality to our app

// Listen for form data and attach it to req.body
app.use(express.urlencoded({ extended: false }));


////////////////// Controllers /////////////////////////
app.use('/authors', authorsController);


/////////////////// Routes /////////////////////////////
// Home Page Route
app.get('/', (req, res) => {
  res.render('index.ejs');
})


// Create a route for /test
// app.get('/test', (req, res) => {
//   res.send('You hit the /test route!')
// })

/////////////////// Start the Server
// Start our Server
app.listen(PORT, () => {
  console.log(`Your server is running on localhost:${PORT} 🚀`);
})
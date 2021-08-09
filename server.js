/////////////////// Require Statements /////////////////
const express = require('express');
const methodOverride = require('method-override');
const rowdy = require('rowdy-logger')
const authorsController = require('./controllers/authorsController.js');
const articlesController = require('./controllers/articlesController.js')

/////////////////// Configuration //////////////////////
const app = express();
const PORT = 4000;
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs');


/////////////////// Middleware /////////////////////////
// Sits between the request and the rest of our routes
// Adds additional functionality to our app

// Listens for POST requests with a _method= in the URL
// then converts the VERB to PUT or DELETE
app.use(methodOverride('_method'));
// Listen for form data and attach it to req.body
app.use(express.urlencoded({ extended: false }));
// Allows express to serve Static files(images, css, client-side JS)
// from the "public" folder
app.use(express.static('public'))

////////////////// Controllers /////////////////////////
// Mount the controller to server.js
app.use('/authors', authorsController);
app.use('/articles', articlesController)

/////////////////// Routes /////////////////////////////
// Home Page Route
app.get('/', (req, res) => {
  res.render('index.ejs');
})


// Create a route for /test
// app.get('/test', (req, res) => {
//   res.send('You hit the /test route!')
// })

/////////////////// Start the Server ///////////////////
// Start our Server
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`Your server is running on localhost:${PORT} 🚀`);
})
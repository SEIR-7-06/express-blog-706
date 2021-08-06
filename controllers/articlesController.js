const express = require('express');
const router = express.Router();
const db = require('../models/index.js')

// Index route
router.get('/', (req, res) => {
    // ✅️ 1. Set up a index route
    // ✅️ 2. Create a template to show the data
    // 3. Get all of the article data
    db.Article.find({}, (err, allArticles) => {
        if(err) return console.log(err)
        console.log(allArticles)
    })
    // 🚫 4. TODO: Pass the data to the template
    // 🚫 5. TODO: Iterate through the data and display it in the template
    // ✅️ 6. res.render(the template)
    res.render('articles/articlesIndex.ejs')
})

// New route - Sends a form
router.get('/new', (req, res) => {
    // ✅️ 1. Create a route for that page
    // ✅️ 2. Create a template for that page
    // ✅️ 3: res.render(the template)
    // res.render STARTS by looking in the 'views'
    // ✅️ 4: Create a form that matches the Article Schema
    res.render('articles/articlesNew.ejs')
})

// Create route
router.post('/', (req, res) => {
    // ✅️ 1. Check that the data is in req.body 
    console.log(req.body)
    // ✅️ 2. Create a new 'document' in the 'article' collection
    db.Article.create({ name: req.body.name, content: req.body.content }, (err) => {
        // Callback function is ran when the response comes back after
        // waiting for the database to respond
        if(err) {
            return console.log("An error has occurred", err)
        }
        // ✅️ 3. Redirect back to index page on successful completion
        res.redirect('/articles')
    })
})

// Show route
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // 🚫 TODO: 1. Find the article by it's id
    // db.Article.findById(req.params.id, (err, foundArticle => { 
    // 🚫 TODO: 2. Pass the data to an ejs template (articlesShow.ejs)
    // 🚫 TODO: 3. res.render() that page

    res.send('STUB: Heres is the individual article you requested!')
})

// Edit route
router.get('/:id/edit', (req, res) => {
    // 🚫 TODO: 1. Find the article specified by req.params.id
    // db.findById(req.params.id, (err, foundArticle) => { 
    // 🚫 TODO: 2. Pass the data to the edit page so you can display the current
    // data 
    // 🚫 TODO: 3. Create a form that does a PUT to /articles/:id
    // 🚫 TODO: 4. res.render the edit page template
    res.send('STUB: Here is the form for editing that article!')
})

// Update route
router.put('/:id', (req, res) => {
    // ✅️ 1. Use the data that came in from the form in req.body to
    // update the article specified in req.params.id
    // ✅️ 2. Redirect to /articles
    db.Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err) => {
            if(err) return console.log(err)
            res.redirect('/articles')
            // res.send('STUB: Article has been updated, thanks!')
        }
    )
})

router.delete('/:id', (req, res) => {
    // 🚫 TODO: 1. Delete the article specified by req.params.id
    // db.findByIdAndDelete
    // 🚫 TODO: 2. res.redirect to /articles
    res.send('STUB: Article has been deleted!')
})

module.exports = router;
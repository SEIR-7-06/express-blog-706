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
        // console.log(allArticles)
        // ✅️ 4. Pass the data to the template
        // ✅️ 5. Iterate through the data and display it in the template
        // ✅️ 6. res.render(the template)
        res.render('articles/articlesIndex.ejs', {
            allArticles: allArticles
        })
    })
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
    // 🚫 1. Check that the data is in req.body 
    // console.log(req.body)
    // 🚫 2. Create a new 'document' in the 'article' collection
    res.send('Youve created an Article!')
})

// Show route
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // ✅️ 1. Find the article by it's id
    db.Article.findById(req.params.id, (err, foundArticle) => {
        if(err) return console.log(err)
        // console.log(foundArticle)
        // ✅️ 2. Pass the data to an ejs template (articlesShow.ejs)
        // ✅️ 3. res.render() that page
        res.render('articles/articlesShow', {
            article: foundArticle
        })
    })

})

// Edit route
router.get('/:id/edit', (req, res) => {
    // ✅️ 1. Find the article specified by req.params.id
    // db.findById(req.params.id, (err, foundArticle) => { 
    // ✅️ 2. Pass the data to the edit page so you can display the current
    // data 
    // 🚫 3. Create a form that does a PUT to /articles/:id
    // ✅️ 4. res.render the edit page template
    db.Article.findById(req.params.id, (err, foundArticle) => {
        if(err) return console.log(err);
        res.render('articles/articlesEdit', {
            article: foundArticle
        })
    })
})

// Update route
router.put('/:id', (req, res) => {
    // 🚫 1. Use the data that came in from the form in req.body to
    // update the article specified in req.params.id
    // 🚫 2. Redirect to /articles
    res.send('SUB: Youve updated the article!')
})

router.delete('/:id', (req, res) => {
    // 🚫 1. Delete the article specified by req.params.id
    // - findByIdAndDelete
    // 🚫 2. res.redirect to /articles
    res.send('STUB: Youve deleted the Article!')
})

module.exports = router;
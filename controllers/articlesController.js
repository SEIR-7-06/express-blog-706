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
    // 1. Make a query to get all the author data
    db.Author.find({}, (err, allAuthors) => {


        // 2. pass that data to the template
        res.render('articles/articlesNew.ejs', { allAuthors: allAuthors });
    })
    // 3. Update the template to have a select box for the authors
})

// Create route - Handles submitting the form and will create a new article
router.post('/', (req, res) => {
    let data = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    }

    db.Article.create(data, (err, createdArticle) => {
        if(err) return console.log(err)

        // Add the article Id to the author that created it
        db.Author.findByIdAndUpdate(
            createdArticle.author, // the id of the author we want to update
            { $push: { articles: createdArticle } }, // push the createdArticle into the author's articles array
            (err, updatedAuthor) => {
                if (err) return console.log(err);

                console.log(updatedAuthor);

                res.redirect('/articles'); // Redirect back to articles index page
            }
        )
    })
    // res.send('Youve created an Article!')
})

// Show route
router.get('/:id', (req, res) => {
    console.log(req.params.id)

    // Find an Article by it's Id and populate the author field
    db.Article.findById(req.params.id) // Getting an article by it's Id
        .populate('author') // Populating that found article with actual author data
        .exec((err, foundArticle) => { // Execute our callback function
            console.log(foundArticle)

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
    // ✅️ 3. Create a form that does a PUT to /articles/:id
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
    // ✅️ 0: Check that the data is in req.body w/ a console.log
    console.log(req.body)
    // ✅️ 1. Use the data that came in from the form in req.body to
    // update the article specified in req.params.id
    db.Article.findByIdAndUpdate(req.params.id, req.body, (err, foundArticle) =>{
        if(err) return console.log(err)
        // ✅️ 2. Redirect to /articles/:id
        res.redirect(`/articles/${req.params.id}`)
    })
})

router.delete('/:id', (req, res) => {
    // ✅️ 1. Delete the article specified by req.params.id
    // - findByIdAndDelete
    db.Article.findByIdAndDelete(req.params.id, (err, deleted) => {
        if(err) return console.log(err)
        // ✅️ 2. res.redirect to /articles
        res.redirect('/articles')
    })
})

module.exports = router;
const mongoose = require('mongoose')

// The schema
const articleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: String
})

// The Model
const Article = mongoose.model('Article', articleSchema)

// Export it
module.exports = Article
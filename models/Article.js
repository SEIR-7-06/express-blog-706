const mongoose = require('mongoose')

// The schema
const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

/*
Example of what an article will look like

{
    title: 'How to Learn a Language Quickly',
    content: 'asdf asf asf asdf asdf',
    author: '12ksfk24sf0sflsf20234'
}

*/

// The Model
const Article = mongoose.model('Article', articleSchema)

// Export it
module.exports = Article
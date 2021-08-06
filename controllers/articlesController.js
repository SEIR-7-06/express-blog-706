const express = require('express');
const router = express.Router();
const db = require('../models/index.js')

// Index route
router.get('/', (req, res) => {
    res.send('STUB: Heres all of the articles you requested!')
})

// New route - Sends a form
router.get('/new', (req, res) => {
    res.send('STUB: Heres the form for making a new article!')
})

// Create route
router.post('/', (req, res) => {
    res.send('STUB: Article has been created! Thanks!')
})

// Show route
router.get('/:id', (req, res) => {
    res.send('STUB: Heres is the individual article you requested!')
})

// Edit route
router.get('/:id/edit', (req, res) => {
    res.send('STUB: Here is the form for editing that article!')
})

// Update route
router.put('/:id', (req, res) => {
    res.send('STUB: Article has been updated, thanks!')
})

router.delete('/:id', (req, res) => {
    res.send('STUB: Article has been deleted!')
})

module.exports = router;
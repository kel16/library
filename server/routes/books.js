var express = require('express')
var router = express.Router()
var booksData = require('../db/booksData.json')

router.get('/books', function (req, res) {
    const books = booksData
    res.send(books)
})

router.get('/book/:id', function (req, res) {
    const b_id = req.params.id
    let about = []
    about.push(booksData.find(x => x.b_id == b_id))
    res.send(about)
})

module.exports = router
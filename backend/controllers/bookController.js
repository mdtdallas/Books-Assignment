const express = require("express")
// Create a router so that we can define API
// routes in this file.
const router = express.Router()
// Access the books model so that we can access
// book data in this file.
const bookModel = require("../models/bookModel")
const logModel = require("../models/logModel")
// use the validator function
const validator = require("validator")

// Define an /api/books endpoint that responds with
// an array of all books.
router.get("/books", (req, res) => {
    bookModel.getAllBooks()
        .then((results) => {
            res.status(200).json(results)
        })
        .catch((error) => {
            // log any error to the node console
            console.log(error)
            res.status(500).json("query error")
        })
})
// api to create new book
router.post("/book/create", (req, res) => {

    let book = req.body

    // If bookTitle is not blank
    if (validator.isAscii(book.bookTitle) == false) {
        res.status(300).json("Book Title is required")
        return;
    }

    // Year is numbers only 
    if (validator.isNumeric(book.yearofPublication) == false) {
        res.status(300).json("Please enter year only!")
        return;
    }

    //let book = req.body
    console.log(book);
    bookModel.createBook(
        validator.escape(book.bookTitle),
        validator.escape(book.yearofPublication),
        validator.escape(book.genre),
        validator.escape(book.millionsSold),
        validator.escape(book.languageWritten),
        book.coverImagePath,
        validator.escape(book.authorID),
        validator.escape(book.bookPlotID)
    )
    .then((result) => {
        res.status(200).json("book created with id " + result.insertId)
        let dateTimeNow = (new Date()).toISOString()
        logModel.addLogEntryBook(result.insertId, req.session.user.userID, dateTimeNow)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("query error - failed to create book")
    })
})
// api to update book
router.post("/book/update", (req, res) => {
    let book = req.body
    console.log(book)
    bookModel.updateBook(
        validator.escape(book.bookID),
        validator.escape(book.bookTitle),
        validator.escape(book.originalTitle),
        validator.escape(book.yearofPublication),
        validator.escape(book.genre),
        validator.escape(book.millionsSold),
        validator.escape(book.languageWritten),
        book.coverImagePath,
        validator.escape(book.authorID),
        validator.escape(book.bookPlotID)
    )
    .then((result) => {
        if (result.affectedRows > 0) {
            console.log(result)
            res.status(200).json("Book Updated!")
            let dateTimeNow = (new Date()).toISOString()
            logModel.updateLogEntryBook(book.bookID, req.session.user.userID, dateTimeNow)
        } else {
            console.log(result)
            res.status(404).json("Book not found!")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to update book - Query Error!")
    })
})
// api to delete book
router.post("/books/delete", (req, res) => {
    let bookId = req.body.bookId
    bookModel.deleteBook(bookId)
    .then((result) => {
        if (result.affectedRows > 0) {
            res.status(200).json("Book Deleted")
        } else {
            console.log(bookId)
            res.status(404).json("Book not found")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to delete book - Query Error!")
    })
})

// Define an /api/books/:id endpoint that responds with
// a specific book by id
router.get("/books/:id", (req, res) => {

    bookModel.getBookById(req.params.id)
    .then((results) => {
        if (results.length > 0) {
            res.status(200).json(results[0])
        } else {
            res.status(404).json("failed to find book by id")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("query error")
    })
})

// This allows the server.js to import (require) the
// routes define in this file.
module.exports = router
const express = require("express")
// Create a router so that we can define API
// routes in this file.
const router = express.Router()
// Access the authors model so that we can access
// author data in this file.
const authorModel = require("../models/authorModel")
// To use the validator to validate the data
const validator = require("validator")

// Define an /api/authors endpoint that responds with
// an array of all authors.
router.get("/authors", (req, res) => {
    authorModel.getAllauthors()
        .then((results) => {
            res.status(200).json(results)
        })
        .catch((error) => {
            // log any error to the node console
            console.log(error)
            res.status(500).json("query error")
        })
})
// an api to create authors
router.post("/author/create", (req, res) => {
    let author = req.body
    
    // valid author name
    if (validator.isAscii(author.name) == false) {
        res.status(300).json("Author first name is required")
        return;
    }
    
    // valid author name
    if (validator.isAscii(author.surname) == false) {
        res.status(300).json("Author surname is required")
        return;
    }
    // valid author nationality
    if (validator.isAscii(author.nationality) == false) {
        res.status(300).json("Author nationality is required")
        return;
    }
    // valid author name
    if (validator.isAlpha(author.nationality) == false) {
        res.status(300).json("Author nationality is invalid")
        return;
    }
    
    // Year is numbers only 
    if (validator.isNumeric(author.birthYear) == false) {
        res.status(300).json("Please enter year only!")
        return;
    }

    console.log(author)
    authorModel.createAuthor(
        validator.escape(author.name),
        validator.escape(author.surname),
        validator.escape(author.nationality),
        validator.escape(author.birthYear),
        validator.escape(author.deathYear)
    )
    .then((result) => {
        res.status(200).json("author created with id " + result.insertId)
    })
    .catch((error) => {
        res.status(500).json("query error - failed to create author")
    })
})

// Define an /api/authors/:id endpoint that responds with
// a specific author by id
router.get("/authors/:id", (req, res) => {

    authorModel.getauthorById(req.params.id)
    .then((results) => {
        if (results.length > 0) {
            res.status(200).json(results[0])
        } else {
            res.status(404).json("failed to find author by id")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("query error")
    })
})
// an api to update author
router.post("/author/update", (req, res) => {
    let author = req.body

    // valid author name
    if (validator.isAscii(author.name) == false) {
        res.status(300).json("Author first name is required")
        return;
    }
    
    // valid author name
    if (validator.isAscii(author.surname) == false) {
        res.status(300).json("Author surname is required")
        return;
    }
    // valid author nationality
    if (validator.isAscii(author.nationality) == false) {
        res.status(300).json("Author nationality is required")
        return;
    }
    // valid author name
    if (validator.isAlpha(author.nationality) == false) {
        res.status(300).json("Author nationality is invalid")
        return;
    }
    
    // Year is numbers only 
    if (validator.isNumeric(author.birthYear) == false) {
        res.status(300).json("Please enter year only!")
        return;
    }

    authorModel.updateAuthor(
        validator.escape(author.authorID),
        validator.escape(author.name),
        validator.escape(author.surname),
        validator.escape(author.nationality),
        validator.escape(author.birthYear),
        validator.escape(author.deathYear)
    )
    .then((result) => {
        if (result.affectedRows > 0) {
            res.status(200).json("Author Updated!")
        } else {
            res.status(404).json("Author not found!")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to update author - Query Error!")
    })
})
//an api to delete author
router.post("/authors/delete", (req, res) => {
    let authorId = req.body.authorId
    authorModel.deleteAuthor(authorId)
    .then((result) => {
        if (result.affectedRows > 0) {
            console.log(result)
            res.status(200).json("Author Deleted")
        } else {
            console.log(authorId)
            res.status(404).json("Author not found!")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to delete author - Query Error!")
    })
})

// This allows the server.js to import (require) the
// routes define in this file.
module.exports = router
// access the express function
const express = require("express")
// create a router to define API routes
const router = express.Router()
// acccess the changelog model file
const changelogModel = require("../models/changelogModel")
// api to get all changelog entries
router.get("/changelog", (req, res) => {
    changelogModel.getAllLogs()
    .then((results) => {
        res.status(200).json(results)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Querty Error" + error)
    })
})
// allows the server.js to import the routes defined in this file
module.exports = router
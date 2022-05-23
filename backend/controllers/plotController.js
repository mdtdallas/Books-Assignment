// access the express function
const express = require("express")
// create router for apis in this file
const router = express.Router()
// access the plot model file
const plotModel = require("../models/plotModel")
// use the validator function
const validator = require("validator")
// get all plots api
router.get("/plots", (req, res) => {
    plotModel.getAllPlots()
    .then((results) => {
        res.status(200).json(results)
    })
    .catch((error) => {
        res.status(500).json("Query Error" + error)
    })
})
// create new plot api
router.post("/plot/create", (req, res) => {
    let bookplot = req.body
    // valid plot title
    if (validator.isAscii(bookplot.plotTitle) == false) {
        res.status(300).json("Plot Title is required")
        return;
    }
    // valid plot
    if (validator.isAscii(bookplot.plot) == false) {
        res.status(300).json("Plot is required")
        return;
    }
    
    console.log(bookplot)
    plotModel.createPlot(
        validator.escape(bookplot.plot),
        validator.escape(bookplot.plotTitle),
        validator.escape(bookplot.bookID)
    )
    .then((result) => {
        console.log(result)
        res.status(200).json("Plot created with id" + result.insertId)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Query Error - Failed to Create Plot")
    })
})
// api to update plot
router.post("/plot/update", (req, res) => {
    let bookplot = req.body
    console.log(bookplot)
    plotModel.updatePlot(
        validator.escape(bookplot.bookPlotID),
        validator.escape(bookplot.plot),
        validator.escape(bookplot.plotTitle),
        validator.escape(bookplot.bookID)
    )
    .then((result) => {
        if (result.affectedRows > 0) {
            console.log(result)
            res.status(200).json("Plot Updated!")
        } else {
            res.status(404).json("Plot not found")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to update Plot - Query Error")
    })
})
// api to get plot by id
router.get("/plot/:id", (req, res) => {

    plotModel.getPlotById(req.params.id)
    .then((results) => {
        if (results.length > 0) {
            res.status(200).json(results[0])
        } else {
            res.status(404).json("failed to find plot by id")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Plot find failed - query error")
    })
})
// api  to delete plot
router.post("/plot/delete", (req, res) => {
    let plotId = req.body.plotId
    plotModel.deletePlot(plotId)
    .then((result) => {
        if (result.affectedRows > 0) {
            console.log(result)
            res.status(200).json("Plot Deleted")
        } else {
            console.log(plotId)
            res.status(404).json("Plot not found!")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to delete plot - Query Error!")
    })
})
// allows the serve.js to import the routes defined in this file
module.exports = router
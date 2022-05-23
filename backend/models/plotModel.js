// access the database
const db = require("../database")
// query to get all plots
module.exports.getAllPlots = () => {
    return db.query("select * from bookplot")
}
// query to create new plot
module.exports.createPlot = (plot, plotTitle, bookID) => {
    return db.query("INSERT INTO bookplot (plot, plotTitle, bookID) " + "VALUES (?, ?, ?)", [plot, plotTitle, bookID])
}
// query to get plot by id
module.exports.getPlotById = (id) => {
    return db.query("SELECT * FROM bookplot WHERE bookPlotID = ?", [id])
}
// query to update plot
module.exports.updatePlot = (bookPlotID, plot, plotTitle, bookID) => {
    return db.query("UPDATE bookplot set plot=?, plotTitle=?, bookID=? WHERE bookPlotID=?", [plot, plotTitle, bookID, bookPlotID])
}
//query to delete plot
module.exports.deletePlot = (plotId) => {
    return db.query( "DELETE FROM bookplot WHERE bookPlotID = ?", [plotId])
} 
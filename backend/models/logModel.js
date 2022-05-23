// access the database
const db = require("../database")
// query to add log entry
module.exports.addLogEntryBook = (bookID, userID, dateCreated, dateChanged) => {
    return db.query("INSERT INTO changelog (bookID, userID, dateCreated, dateChanged) " + "VALUES (?, ?, ?, ?)", [bookID, userID, dateCreated, dateChanged])
}
// query to update a log entry
module.exports.updateLogEntryBook = (bookID, userID, dateChanged, changeLogID) => {
    return db.query("UPDATE changelog SET bookID=?, userID=?, dateChanged=? WHERE changeLogID=?", [bookID, userID, dateChanged, changeLogID])
}

// (bookID, userID, dateChanged) => {
    // update changelog dateChanged, userID WHERE bookID = ?
    // return db.query("UPDATE changelog set userID=?, dateChanged=? WHERE bookID=?", [userID, dateChanged, bookID])
// }
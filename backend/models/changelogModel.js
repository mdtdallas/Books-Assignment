// access to the database
const db = require("../database")
// query to get all logs from the database
module.exports.getAllLogs = () => {
    return db.query("SELECT c.bookID, c.changeLogID, c.dateCreated, c.dateChanged, c.userID, b.bookTitle, u.username from changelog c inner join book b on (c.bookID = b.bookID) inner join users u on (c.userID = u.userID)")
}
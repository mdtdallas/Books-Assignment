// access to the database
const db = require("../database")
//query to get all book from the db
module.exports.getAllBooks = () => {
    return db.query("select b.bookTitle, b.originalTitle, a.name, a.surname, b.genre, b.yearofPublication, b.millionsSold, b.languageWritten, b.coverImagePath, b.bookID, b.authorID, b.bookPlotID from book b INNER JOIN author a ON (a.authorID = b.authorID);")
}

// module.exports.getAllBooks = () => {
//     return db.query("select b.bookTitle, b.originalTitle, a.name, a.surname, b.genre, b.yearofPublication, b.millionsSold, b.languageWritten, b.coverImagePath, b.bookID, b.authorID, p.plotTitle, p.bookPlotID from book b INNER JOIN author a ON (a.authorID = b.authorID) INNER JOIN bookplot p ON (b.authorID = p.bookID)")
// }
// query to get all books by id including author names
module.exports.getBookById = (id) => {
    return db.query(`SELECT
	b.bookTitle, b.originalTitle, a.name,
    a.surname, b.genre, b.yearofPublication, 
    b.millionsSold, b.languageWritten, b.coverImagePath, 
    b.bookID, b.authorID, b.bookPlotID
FROM book b
INNER JOIN author a ON (a.authorID = b.authorID)
WHERE bookID = ?`, [id])
}
// query to create new book into db
module.exports.createBook = (bookTitle, yearofPublication, genre, millionsSold, languageWritten, coverImagePath, authorID, bookPlotID) => {
    return db.query("INSERT INTO book (bookTitle, yearofPublication, genre, millionsSold, languageWritten, coverImagePath, authorID, bookPlotID) " + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [bookTitle, yearofPublication, genre, millionsSold, languageWritten, coverImagePath, authorID, bookPlotID])
}
// query to update book to the db
module.exports.updateBook = (bookID, bookTitle, originalTitle, yearofPublication, genre, millionsSold, languageWritten, coverImagePath, authorID, bookPlotID) => {
    return db.query("UPDATE book set bookTitle=?, originalTitle=?, yearofPublication=?, genre=?, millionsSold=?, languageWritten=?, coverImagePath=?, authorID=?, bookPlotID=? WHERE bookID=?" , [bookTitle, originalTitle, yearofPublication, genre, millionsSold, languageWritten, coverImagePath, authorID, bookPlotID, bookID])
}
//query to delete book by id
module.exports.deleteBook = (bookId) => {
    return db.query( "DELETE FROM book WHERE bookID = ?", [bookId])
} 


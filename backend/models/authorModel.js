// access the database
const db = require("../database")
// query to get all authors
module.exports.getAllauthors = () => {
    return db.query("select * from author")
}
// query to get author by id
module.exports.getauthorById = (id) => {
    return db.query("SELECT * FROM author WHERE authorID = ?", [id])
}
// query to create new author
module.exports.createAuthor = (name, surname, nationality, birthYear, deathYear) => {
    return db.query("INSERT INTO author (name, surname, nationality, birthYear, deathYear) " + "VALUES (?, ?, ?, ?, ?)", [name, surname, nationality, birthYear, deathYear])
}
// query to update author details
module.exports.updateAuthor = (authorID, name, surname, nationality, birthYear, deathYear) => {
    return db.query("UPDATE author set name=?, surname=?, nationality=?, birthYear=?, deathYear=? WHERE authorID=?" , [name, surname, nationality, birthYear, deathYear, authorID])
}
// query to delete author
module.exports.deleteAuthor = (authorId) => {
    return db.query( "DELETE FROM author WHERE authorID = ?", [authorId])
} 
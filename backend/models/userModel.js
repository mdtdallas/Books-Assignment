// Access the database
const db = require("../database")
// query to get all users
module.exports.getAllUsers = () => {
    return db.query("SELECT userID, firstName, lastName, email, username, accessRights FROM users")
}
// query to create a new user
module.exports.createUser = (firstName, lastName, email, username, password, accessRights) => {
    return db.query("INSERT INTO users (firstName, lastName, email, username, password, accessRights) "
    + "VALUES (?, ?, ?, ?, ?, ?)", [firstName, lastName, email, username, password, accessRights])
}
// query to get user by id
module.exports.getUserById = (id) => {
    return db.query("SELECT * FROM users WHERE userID = ?", [id])
}
// query to get user by username
module.exports.getUserByUsername = (username) => {
    return db.query("select * from users where username = ?", [username])
}
// query to update user
module.exports.updateUser = (userId, firstName, lastName, email, username, password, accessRights) => {
    return db.query("Update users set firstName=?, lastName=?, email=?, username=?, password=?, accessRights=? where userID=?" , [firstName, lastName, email, username, password, accessRights, userId])
}
//query to delete user
module.exports.deleteUser = (userId) => {
    return db.query( "DELETE FROM `users` WHERE `users`.`userID` = ?", [userId])
} 
// access the mysql function
const mysql = require("mysql2");
// create a pool connection to database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    // password: 'root',
    database: 'webbooks'
  });
// create query parameters
const query = (sql, parameters) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, parameters, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

//export the new function
module.exports = { query }
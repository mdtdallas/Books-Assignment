// access the express function
const express = require("express")
// ensure all passwords are encrypted
const bcrypt = require("bcrypt")
// ensure all inputs are clean
const validator = require("validator")
// create router so that we can define api routes
const router = express.Router()
// access the user models file
const userModel = require("../models/userModel")

// api to get all users
router.get("/users", (req, res) => {
    userModel.getAllUsers()
    .then((results) => {
        res.status(200).json(results)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Query error")
    })
})
// api to create new user
router.post("/users/create", (req, res) => {
    if (req.session.user.accessRights != "admin") {
        // send error message
        res.status(403).json("Admin only!")
        //stop this command
        return;
    }
    
    let user = req.body
    // Valid first Name
    if (validator.isAlpha(user.firstName) == false) {
        res.status(300).json("Please enter valid first name")
        return;
    }

    // Only allow valid emails
    if (validator.isEmail(user.email) == false) {
        res.status(300).json("Invalid email")
        return;
    }

    // Valid username
    if (validator.isAscii(user.username) == false) {
        res.status(300).json("Invalid username")
        return;
    }

    // valid password
    if (validator.isAscii(user.password) == false) {
        res.status(300).json("Invalid password")
        return;
    }

    // valid Access Rights
    if (validator.isAscii(user.accessRights) == false) {
        res.status(300).json("Invalid Access Rights")
        return;
    }

    let hashedPassword = bcrypt.hashSync(user.password, 6)

    //each fo the following names reference the "name" attribute in promise
    userModel.createUser(
        validator.escape(user.firstName),
        validator.escape(user.lastName),
        validator.escape(user.email),
        validator.escape(user.username),
        hashedPassword,  // we now stored the hashed password
        validator.escape(user.accessRights)
    )
    .then((result) => {
        res.status(200).json("User created with id " + result.insertId)
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json("Query error - Failed to create user")
    })
})
// api to get user by id
router.get("/users/:id", (req, res) => {
    userModel.getUserById(req.params.id)
    .then((results) => {
        if(results.length > 0) {
    
            res.status(200).json(results[0])
        } else {
            res.status(404).json("Failed to get user by ID")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to get the user - Query error")
    })
})

//define an /api /users/update
router.post("/users/update", (req, res) => {
    let user = req.body

    // Valid first Name
    if (validator.isAlpha(user.firstName) == false) {
        res.status(300).json("Please enter valid first name")
        return;
    }

    // Valid username
    if (validator.isAscii(user.username) == false) {
        res.status(300).json("Invalid username")
        return;
    }

    // Only allow valid emails
    if (validator.isEmail(user.email) == false) {
        res.status(300).json("Invalid email")
        return;
    }

    // valid password
    if (validator.isAscii(user.password) == false) {
        res.status(300).json("Invalid password")
        return;
    }

    // valid Access Rights
    if (validator.isAscii(user.accessRights) == false) {
        res.status(300).json("Invalid Access Rights")
        return;
    }

    // if the password does not start with a dollar sign we need to hash it
    let hashedPassword = user.password
    if (!user.password.startsWith('$2b$')) {
        hashedPassword = bcrypt.hashSync(user.password, 6)
    } 

    //each of the names below refernce the name attribute in the form
    userModel.updateUser(
        validator.escape(user.userId),
        validator.escape(user.firstName),
        validator.escape(user.lastName),
        validator.escape(user.email),
        validator.escape(user.username),
        hashedPassword, // use the hashed password
        validator.escape(user.accessRights)
    )
    .then((result) => {
        if (result.affectedRows > 0) {
            res.status(200).json("User updated")
        } else {
            res.status(404).json("User not found")
            console.log(result)
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to update user - query error")
    })
})
// api to delete user
router.post("/users/delete", (req, res) => {
    let userId = req.body.userId
    userModel.deleteUser(userId)
    .then((result) => {
        if (result.affectedRows > 0) {
            console.log(userId)
            res.status(200).json("User deleted")
        } else {
            console.log(userId)
            res.status(404).json("User not found!")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to delete user - Query Error!")
    })
})
// api for users to login
router.post("/users/login", (req, res) => {
    let login = req.body

    if (validator.isAscii(login.username) == false) {
        res.status(300).json("Please enter username")
        return;
    }

    if (validator.isAscii(login.password) == false) {
        res.status(300).json("Please enter password")
        return;
    }
// access the query to get user by username
    userModel.getUserByUsername(login.username)
    .then((results) => {
        if (results.length > 0) {
            let user = results[0]
            if (bcrypt.compareSync(login.password, user.password)) {
                req.session.user = {
                    userID: user.userID,
                    accessRights: user.accessRights,
                }

                res.status(200).json({ message: "Login Successful", userType: req.session.user.accessRights, user: user.userID})
            } else {
                // wrong password
                res.status(401).json("Maybe incorrect Password")
            }
        } else {
            res.status(404).json("User not found")
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("Failed to login - query error")
    })
})


// api to allow users to logout
router.post("/users/logout", (req, res) => {
    req.session.destroy()
    res.status(200).json("Logged out")
})
// allow the server.js to import the routes defined in this file
module.exports = router
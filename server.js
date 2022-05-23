const express = require("express")
const session = require("express-session")
const server = express()
const port = 8080


// Serve static backend api
server.use("/api", express.static("backend"))

// Enable middleware for JSON and urlencoded form data
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

//enable session middleware so that we have state
server.use(session({
    secret: "secret phrase 1234",
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}

}))

server.use((req, res, next) => {
    console.log(`${req.method} - ${req.url},`);
    next();
});

//access control middleware
server.use((req, res, next) => {
    // the user is logged in if the have session data
    let userLoggedIn = req.session.user !=null
    console.log(userLoggedIn)
    //define a list of allowed urls for non-logged in users
    let allowedURLs = [
        "/login.html",
        "/js/login.js",
        "/css/style.css",
        "/api/users/login",
        "/js/script.js",
        "/nav.html",
        "/footer.html"
    ]

    let guestAllowedURLs = [
        "login.html",
        "/js/login.js",
        "/css/style.css",
        "api/users/login",
        "js/script.js",
        "nav.html"
    ]

    let adminOnlyURLS = [
        "/create_user.html",
        "/user_list.html",
        "/update_user.html",
        "/delete_user.html",
        "/js/create_user.js",
        "/js/user_list.js",
        "/js/update_user.js",
        "/js/delete_user.js",
        "/api/users/:id",
        "/api/users/create",
        "/api/users/update",
        "/api/users/delete",
        "/changelog.html",
        "/api/changelog"       
     ]
    // if the user is logged in 
    if (userLoggedIn) {
        // let them through
        if (adminOnlyURLS.includes(req.originalUrl) && req.session.user.accessRights != "admin") {
            res.redirect("/book_list.html");
        } else {
            next()
        }
        
    } else {
        if (allowedURLs.includes(req.originalUrl)) {
            //allows the guest user through
            next()
    } else {
            //if not allowed - reditect to the login page
            res.redirect("/login.html")
        }
    }  
        
})


// Serve static frontend resources
server.use(express.static("frontend"))


// Link up book controller
const bookController = require("./backend/controllers/bookController")
server.use("/api", bookController)

const userController = require("./backend/controllers/userController")
server.use("/api", userController)

const authorController = require("./backend/controllers/authorController")
server.use("/api", authorController)

const plotController = require("./backend/controllers/plotController")
server.use("/api", plotController)

const changelogController = require("./backend/controllers/changelogController")
const res = require("express/lib/response")
server.use("/api", changelogController)

// Start the express server
server.listen(port, () => {
    console.log("Backend listening on http://localhost:"+port)
})
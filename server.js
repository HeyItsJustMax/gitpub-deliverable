// require express
const express = require("express")
// set express() to a variable
const app = express()
// set port variable to 3000
const port = 3000
// set up drinks data so it can be required
const drinks = require("./models/drinks.js")

// ========== ROUTES ==========

// include a get route 
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

// get route for drinks
app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", { allDrinks: drinks, })
})

// get route for /drinks/:id
app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})

// set up app to listen to assigned port#
app.listen(port, () => {
        console.log('listening')
    }
)
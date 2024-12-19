const express = require('express');
var app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const { Model } = require('mongoose');
app.use(bodyParser.json()); //request.body..
require('dotenv').config();
const passport = require('./config/auth')

// set Middleware Function
const logRequest = (req, res, next) => {
   // console.log(`[${new Date().toString()}] Requested made to: ${req.originalUrl}`)
    next(); // Move to the next Phase
}


app.use(passport.initialize());
//app.use(logRequest);
const localAuthMiddleware = passport.authenticate('local', { session: false });
app.get('/',localAuthMiddleware , (req, res) => {
    res.json({ message: "Server is healthy! Welcome !!" });
});
// import person Routes
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// starting Menu section...
const menuItemsRouts = require('./routes/menuItemsRout');
app.use('/menu', menuItemsRouts);

// define port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Running on port 3000");
});

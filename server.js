const express = require('express');
var app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const { Model } = require('mongoose');
app.use(bodyParser.json()); //request.body..
require('dotenv').config();

app.get('/api/health', (req, res) => {
    res.json({ message: "Server is healthy!" });
});
// import person Routes
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

// starting Menu section...
const menuItemsRouts = require('./routes/menuItemsRout');
app.use('/menu',menuItemsRouts);

// define port
const PORT = process.env.PORT;
app.listen(3000, () => {
    console.log("Server Running on port 3000");
});

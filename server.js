// Here is where we import modules
// We begin by loading Express
const express = require("express");
require('dotenv').config();
const morgan = require('morgan');

//Database 
require('./config/database.js');

const app = express();

//middleware
app.use(morgan('dev'));

//routes

//Landing page
app.get('/', (req, res,next) => {
    res.send("index.ejs");
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
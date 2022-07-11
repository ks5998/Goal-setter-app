//import express, dotenv, 
const express = require('express');
const dotenv = require('dotenv').config();

//calling PORT from .env file
const port = process.env.PORT || 5000;

//initialise express
const app = express();

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, ()=> console.log(`server started on port ${port}`))

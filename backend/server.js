//import express, dotenv, errorHandler
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

//calling PORT from .env file
const port = process.env.PORT || 5000;

//initialise express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);

app.listen(port, ()=> console.log(`server started on port ${port}`));

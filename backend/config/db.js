//import mongoose, 
const mongoose = require('mongoose');

//connecting MongoDB with my App

const connectDB = async ()=>{
    try {
        const cnct = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${cnct.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;
require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const databaseConnection = require('./database/db');

// connecting the database
databaseConnection();


app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})

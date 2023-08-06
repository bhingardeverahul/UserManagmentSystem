const mongoose = require("mongoose");
require("./db/connect")
require('dotenv').config()
const express = require("express");
const app = express();
const port=process.env.PORT || 3000

//for user routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);


//for admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.listen(port,function(){
    console.log(`Server is  runnnig...on http://localhost:${port}`);
});
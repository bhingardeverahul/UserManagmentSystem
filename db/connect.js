const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected successfully..")
}).catch((err) => {
    console.log(err)
});


// const mongoose=require("mongoose")
// const config = require("../config/config");
// mongoose.connect("",{useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   })
// const db=mongoose.connection;
// db.on("error",(error)=>{
// console.log(error)
// })
// db.once("open",()=>{
//     console.log("MongoDB  connected successfully....")
// }) 


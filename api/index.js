import express from "express" 
import dotenv from "dotenv"
import cors from "cors"  
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import reviewsRoute from "./routes/reviews.js" 
import bookingsDataRoute from "./routes/bookingsData.js"  
import wishlistsRoute from "./routes/wishlists.js"  


// const express = require("express");

const app = express();
app.use(cookieParser());
dotenv.config()  

// const cors = require('cors');
app.use(cors()) 

const connect = async () => {       // async function because we'are using await in mongoose code
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongodb")
    }
    catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})


// app.get("/", (req, res) => {         // for this we can make a separate file for ignoring bothering
//     res.send("hello first request")
// })


// MiddleWares

// next method

// app.use((req, res, next) => {
//     console.log("hi i'm a middleware!")
//     next()
// })


app.use(express.json())  

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/reviews", reviewsRoute);
app.use("/api/bookUserData", bookingsDataRoute);
app.use("/api/wishlist", wishlistsRoute); 


// app.use((req, res, next) => {
//     // console.log("hi i'm a middleware!")
//     res.send("hi i'm a middleware!")
// })


// error handling

app.use((err, req, res, next) => {

    // return res.status(500).json("Hello error from handler!")

    // if we want to send error and message manually
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    }); 
});


app.listen(8800, () => {
    connect()
    console.log("Connected to backend") 
})
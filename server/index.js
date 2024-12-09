import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js";
dotenv.config({});

// call Database connection
connectDB()
const app = express();
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`port is running at ${PORT}`);
    
})
import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config({});

// call Database connection
connectDB()
const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

// APIS
app.use("/api/v1/user", userRouter)

app.listen(PORT, ()=>{
    console.log(`port is running at ${PORT}`);
    
})
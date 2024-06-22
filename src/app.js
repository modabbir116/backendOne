import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }))

app.use(cors({
    origin: process.env.ORIGIN
}))

app.use(cookieParser())


import userRouter from "./routes/user.route.js"

app.use(`${process.env.API_URL}/users`, userRouter)

export { app }
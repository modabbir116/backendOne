import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }))

app.use(cors({
    origin: "*"
}))

app.use(cookieParser())


import userRouter from "./routes/user.route.js"

app.use("/api/v1/users", userRouter)

export { app }
import { app } from "./app.js";
import { dbConnection } from "../src/db/index.js";

dbConnection()


app.listen(8000, ()=>{
    console.log("server is running");
})

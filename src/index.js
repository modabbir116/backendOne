import { app } from "./app.js";
import { dbConnection } from "../src/db/index.js";
let PORT = process.env.PORT || 8000

dbConnection()


app.listen(PORT, ()=>{
    console.log("server is running", PORT);
})

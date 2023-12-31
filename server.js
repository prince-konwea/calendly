import dotenv from "dotenv/config"
import express from "express";
import routes from "./routes/index.js";
import db from "./config/database.js";
const app = express();


app.use(express.json())
app.use("/v1", routes)


// connecting db

db()

const port = process.env.PORT || 3000

app.listen(port, console.log(`Server is running on ${port}`) );

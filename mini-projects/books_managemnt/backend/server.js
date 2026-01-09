import express from "express"
import booksRoute from "./src/routes/booksRoute.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
const app = express();

connectDB();
dotenv.config();

const PORT = process.env.PORT || 5000;
// Middleware to parse JSON
 app.use(express.json())
app.use("/books", booksRoute)


app.listen(PORT, () => {

 console.log ("server connected successfully!", PORT )
})


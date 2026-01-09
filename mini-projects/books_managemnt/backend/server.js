import express from "express"
import booksRoute from "./src/routes/booksRoute.js";

const app = express();

// Middleware to parse JSON
 app.use(express.json())
app.use("/books", booksRoute)


app.listen(5000, () => {

 console.log ("server connected successfully!" )
})


import express from "express"
import cors from "cors";
import booksRoute from "./src/routes/booksRoute.js";
import authenticationRoutes from "./src/routes/authenticationRoutes.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv"
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;
// Middleware to parse JSON
app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json())
app.use("/api/auth", authenticationRoutes);
app.use("/api/books", booksRoute)


connectDB().then(() => {
    app.listen(PORT, () => {
    
     console.log ("server connected successfully!", PORT )
    })


})

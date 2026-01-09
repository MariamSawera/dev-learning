import express from "express"

const app = express();

// Middleware to parse JSON
 app.use(express.json())

app.listen(5000, () => {

 console.log ("server connected successfully!")
})


import express from "express"
import { Router } from "express";
import { addABook, deleteBook, getAllBooks, updateBook } from "../controllers/booksController.js";

const router = express.Router()

router.get("/", getAllBooks);
router.get("/", addABook);
router.get("/:id", updateBook);
router.get("/:id", deleteBook);


// router.post("/", (req, res) => {

//    try{
//      res.status(200).send("books Added")
//    } catch(error) {
//     res.status(500).json({ message: "Server error", error: error.message });

//    }


// })


export default router; 
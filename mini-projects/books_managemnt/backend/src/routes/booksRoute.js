import express from "express"
import { Router } from "express";
import { addABook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/booksController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { restrictTo } from "../middlewares/roleMiddleware.js";


const router = express.Router()

router.get("/",protect,restrictTo("admin"), getAllBooks);
router.get("/:id",protect, getBookById);

router.post("/",protect, addABook);
router.put("/:id",protect, updateBook);
router.delete("/:id",protect, deleteBook);


// router.post("/", (req, res) => {

//    try{
//      res.status(200).send("books Added")
//    } catch(error) {
//     res.status(500).json({ message: "Server error", error: error.message });

//    }


// })


export default router; 
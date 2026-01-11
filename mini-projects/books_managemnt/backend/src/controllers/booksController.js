import Book from "../../models/Book.js";
import { protect } from "../middlewares/authMiddleware.js";
export const getAllBooks = async (req, res) => {

   try{
     const books =  await Book.find({createdBy: req.user.id});
     res.json(books)
    //  res.status(200).send("booksFetched")

   } catch(error) {
    console.error("error in getAllBooks" ,error)
    res.status(500).json({ message: "Server error", error: error.message });

   }


}

export const getBookById = async(req, res) => {
  try{
    const getBook = await Book.findById(req.params.id)
    if(!getBook) return res.status(404).send("book not found!")
    res.status(200).json(getBook)
  }catch(error){
        res.status(500).json({ message: "Server error", error: error.message });
    console.error("error in getBookById", error)


  }

}

export const addABook = async (req, res) => {

   try{
    const {title, author, publishedYear} = req.body;
    const newBook = new Book({title, author, publishedYear, createdBy: req.user.id
})
    await newBook.save();

     res.status(201).json({message : "Book added successfully", book: newBook
})
   } catch(error) {
    res.status(500).json({ message: "Server error", error});
    console.error("error in addAbook", error)


   }


}

export const updateBook = async (req, res) => {

   try{
        const {title, author, publishedYear} = req.body;

    const updateBooks = await Book.findByIdAndUpdate(req.params.id, {title, author, publishedYear}, { new: true,});
    if(!updateBooks) return res.status(404).json({message: "book not found!"})
      res.json(updateBooks)
     res.status(200).send("updateBooks")
   } catch(error) {
    res.status(500).json({ message: "Server error", error: error.message });
        console.error("error in updateBook", error)


   }


}

export const deleteBook = async (req, res) => {

   try{
    const deleteBooks = await Book.findByIdAndDelete(req.params.id);
    if(!deleteBooks) return res.status(404).json({message: "book not found!"})
      res.json({message: "book deleted successfully"})

   } catch(error) {
    res.status(500).json({ message: "Server error", error: error.message });

   }


}
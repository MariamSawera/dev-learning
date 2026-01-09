export const getAllBooks = async (req, res) => {

   try{
     res.status(200).send("booksFetched")
   } catch(error) {
    res.status(500).json({ message: "Server error", error: error.message });

   }


}

export const addABook = async (req, res) => {

   try{
     res.status(200).send("booksFetched")
   } catch(error) {
    res.status(500).json({ message: "Server error", error: error.message });

   }


}

export const updateBook = async (req, res) => {

   try{
     res.status(200).send("updatedbook")
   } catch(error) {
    res.status(500).json({ message: "Server error", error: error.message });

   }


}

export const deleteBook = async (req, res) => {

   try{
     res.status(200).send("dleetedbook")
   } catch(error) {
    res.status(500).json({ message: "Server error", error: error.message });

   }


}
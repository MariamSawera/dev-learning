import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import BookCard from '../components/BookCard.jsx'
import BooksNotFound from '../components/BooksNotFound.jsx'
import api from '../lib/axios.js'


const HomePage = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    const fetchBooks = async() => {
      try{
        const res = await api.get("/books")
        console.log(res.data);
        setBooks(res.data)
      }catch(error) {
       console.log("Error fetching Books", error);
      }finally{
        setLoading(false);
      }
    }

    fetchBooks();
  }, [])

  return (
    <div>
      <Navbar/> 
      <div>
        {loading && (<div>Loading books...</div>)}
        {!loading && books.length === 0 && <BooksNotFound/>}
        {books.length > 0 && (
          <div>
            {books.map((book) => (
              <BookCard
                key={book._id}
                setBooks={setBooks}
                book={book}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage

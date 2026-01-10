import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BookCard from '../components/BookCard'

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
  },
  [])



return (
  <div>
    <Navbar/> 
    <div>
      {loading && (<div>Loading books...</div>)}
      {!loading && books.length === 0 && <BooksNotFound/>}
      {books.length > 0 && (<div>{books.map((book) => {
        <BookCard
        key={book._id}
        setBooks={setBooks}
        book={book}
        
        />

      })}</div>)}

    </div>
  </div>
);

}

export default HomePage


//   const [notes, setNotes] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchNotes = async () => {
//     try {
//       const res = await api.get("/notes");
//       console.log(res.data);
//       setNotes(res.data);
//     } catch (error) {
//       console.log("Error fetching notes", error);
//       toast.error("Failed to load notes");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchNotes();
// }, []);

// return (
//   <div>
//     <Navbar />

//     <div>
//       {loading && (
//         <div>
//           Loading notes...
//         </div>
//       )}


//       {!loading && notes.length === 0 && <NotesNotFound />}

//       {notes.length > 0 && (
//         <div>
//           {notes.map((note) => (
//             <NoteCard
//               key={note._id}
//               note={note}
//               setNotes={setNotes}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
// );

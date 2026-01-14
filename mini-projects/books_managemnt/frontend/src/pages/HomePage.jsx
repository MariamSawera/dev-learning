import React, { useEffect, useState } from 'react'
import api from '../lib/axios'

const HomePage = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");




  useEffect(() => {


    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem('token')

        const res = await api.get('/books/mybooks',{
                    headers: {
            Authorization: `Bearer ${token}`,
          },

        })
        console.log('Books:', res.data)
        setBooks(res.data)
      } catch (err) {
        setError('Unauthorized or failed to fetch books')
        
      }
      setLoading(false)
    }

    fetchBooks()
  }, [])

  const handleAddBook = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem('token')

      const res = await api.post(
        '/books',
        {
          title: title,
          author: author,
          publishedYear: publishedYear
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      // add new book to UI immediately
      setBooks([...books, res.data])

      // clear inputs
      setTitle('')
      setAuthor('')
      publishedYear('')
    } catch (err) {
      setError('Failed to add book')
    }
  }

  if (loading) return <p>Loading books...</p>

  return (
    <div>
            <h2>Add Book</h2>

      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <br />

                <input
          type="text"
          placeholder="publishedYear"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />

        <br />


        <button type="submit">Add Book</button>
      </form>

      <hr />

      <h2>My Books</h2>



      {error && <p style={{ color: 'red' }}>{error}</p>}

      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <div key={book._id}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.publishedYear}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default HomePage

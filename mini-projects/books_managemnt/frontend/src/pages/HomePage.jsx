import React, { useEffect, useState } from 'react'
import api from '../api' 

const HomePage = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get('/mybooks')
        console.log(res.data)
        setBooks(res.data)
      } catch (error) {
        console.error('Error fetching books:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <div key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default HomePage

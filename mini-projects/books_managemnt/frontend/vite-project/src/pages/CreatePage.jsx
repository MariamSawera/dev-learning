import React, { useState} from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

const CreatePage = () => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
      // const [publishedYear, setPublishedYear] = useState("");

   const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    setLoading(true);

    try {
      await api.post("/books", {
        title,
        content
      });

      navigate("/");
    } catch (error) {
      console.log("Error creating book", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div>
        <div>
          <Link to = {"/"}>Back to Books</Link>
        </div>
        <div>
          <h3>Create a note</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title
              </label>
              <input   id="title"
  type="text"
  placeholder="Note Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
 />
            </div>

            <div>
              <label htmlFor="content">Content</label>
              <textarea   id="content"
  placeholder="Write your note here..."
  value={content}
  onChange={(e) => setContent(e.target.value)}
  rows={6}
></textarea>
            </div>
            <div>
              <button type='submit' disabled={loading}>
                {loading? "creating book.. ": "create a book"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePage

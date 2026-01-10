import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage' 

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<CreatePage/>}/>
      </Routes>

    </div>
  )
}

export default App

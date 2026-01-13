import React from 'react'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={LoginPage}/>
        {/* <Route/> */}

      </Routes>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import api from "../lib/axios"
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

  const navigate = useNavigate()


  const [isSignup, setIsSignup] = useState(false)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
      const [error, setError] = useState('')


    // useEffect(() => {
    //     const fetch
    // })
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
        if(isSignup) {
          const res = await api.post("/auth/register", {
            name: name,
            email: email,
            password:password,
          })

          console.log("Register success", res.data)
        } 

        else{
          const res = await api.post("/auth/login", {
            email:email,
            password:password,
          })
          console.log("Login susccess", res.data)
          localStorage.setItem('token', res.data.token)

          navigate('/home')

        }

      }catch(error){
              setError('Invalid credentials or server error')


      }
        
     setLoading(false)

    }

  return (
    <div>
      <h2>{isSignup ?"Signup" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
        )}
        <br />
          <input type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <br />
          <input type="text" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <br />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type='submit'>
          {
            loading ? "Loading..." : isSignup ? "Sign Up" : "Login"
          }
        </button>
      </form>

        <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Go to Login' : 'Go to Sign Up'}
      </button>

      
    </div>
  )
}

export default LoginPage

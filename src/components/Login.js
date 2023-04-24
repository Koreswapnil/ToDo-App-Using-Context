import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

const Login = () => {

  const [username, setUsername]= useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const res = await axios.post('/login', {username, password})
    console.log(res)
  }


  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        className="form-input"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-input"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button className="form-btn">Login</button>
      <p>Register Now</p>
    </form>
  </div>
  )
}

export default Login
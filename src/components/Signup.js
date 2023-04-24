import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';


const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword]= useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password===confirmPassword){
            const res = await axios.post('/register', {username: email, password, name})
            console.log(res)
        }
    }

  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Name"
        className="form-input"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="form-input"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-input"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="form-input"
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
      />
      <button className="form-btn">Sign Up</button>
      <p>Register Now</p>
    </form>
  </div>
    
  )
}

export default Signup
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'

export const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/login', { email, password })
      .then(response => {
        window.localStorage.setItem('token', response.data.result);
        navigate('/courses');
      })
      .catch(error => {
        alert('There was an error login in the user', error.message);
      });
  }

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder='Enter email'/>
        </div>
        <div className="input-container">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder='Enter password'/>
        </div>
        
        <button type="submit" className="button">Login</button>
      </form>
      <div className="link-container">
        Don't have an account? <Link to="/registration" className="link">Register</Link>
      </div>
    </div>
  )
}

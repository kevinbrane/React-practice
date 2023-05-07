import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import '../styles/Registration.css'

export const Registration = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/register', { name, email, password })
      .then(response => {
        navigate('/login');
      })
      .catch(error => {
        alert('There was an error creating the user', error.message);
      });
  }

  return (
    <div className="container">
    <h2 className="heading">Registration</h2>
    <form action="" onSubmit={(event) => handleRegistration(event)}>
      <div className="input-container">
        <label htmlFor="name" className="label">Name</label>
        <input type="text" id="name" name="name" placeholder='Enter name' onChange={handleNameChange}/>
      </div>
      <div className="input-container">
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter email' onChange={handleEmailChange}/>
      </div>
      <div className="input-container">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" name="password" placeholder='Enter password' onChange={handlePasswordChange}/>
      </div>
      <button type="submit" className="button">Registration</button>
      <div className="link-container">
        Already have an account? <Link to="/login" className="link">Login</Link>
      </div>
    </form>
  </div>
  )
}

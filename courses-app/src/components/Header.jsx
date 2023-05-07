import React from 'react'
import {Button} from './Button'
import { Logo } from './Logo'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';


export const Header = () => {
  const { userName } = useSearchContext();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login');
  }
  return (
    <div className='Header'>
      <Logo/>
      <div className='rightHeader'>
        <label>{userName}</label>
        {token &&
          <Button onClick={handleLogout} className="button">Logout</Button>
        }
      </div>
    </div>
  )
}

import React from 'react'
import { useDispatch } from 'react-redux';
import {Button} from './Button'
import { Logo } from './Logo'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';
import { logout } from '../store/user/actionCreators';


export const Header = () => {
  const { userName } = useSearchContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    dispatch(logout());
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

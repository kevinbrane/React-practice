import React from 'react'
import {Button} from './Button'
import { Logo } from './Logo'
import '../styles/Header.css'

export const Header = () => {
  return (
    <div className='Header'>
      <Logo/>
      <div className='rightHeader'>
        <label>Vasya</label>
        <Button className="button">Logout</Button>
      </div>
    </div>
  )
}

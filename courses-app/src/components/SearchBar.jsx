import React from 'react'
import { Button } from './Button'
import '../styles/Search.css'

export const SearchBar = () => {
  return (
    <div className='search-container'>
      <input className='search-input' type="search" placeholder='Enter course name or id...' />
      <Button>Search</Button>
    </div>
  )
}
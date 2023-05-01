import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from './Button'
import { Input } from './Input';
import '../styles/Search.css'
import { useSearchContext } from '../context/SearchContext';


export const SearchBar = () => {
  const [value, setValue] = useState("")
  const { setSearch} = useSearchContext()

  function handleInputChange(event) {
    const value = event.target.value
    setValue(value.trim())
  }

  useEffect(()=> {
    if(!value){
      setSearch(value.toLocaleLowerCase())
    }
  },[value, setSearch])

  function handleSearch() { 
    setSearch(value.toLocaleLowerCase()) 
  }

  return (
    <div className='search-container'>
     <Input placeHolderText='Enter course name or id...' onChange={handleInputChange}/>
      <Button  onClick={handleSearch} >Search</Button>
    </div>
  )
}

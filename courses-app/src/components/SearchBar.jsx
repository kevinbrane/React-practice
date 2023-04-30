import React from 'react'
import { useState } from 'react';
import { Button } from './Button'
import CourseCard from './CourseCard';
import '../styles/Search.css'

export const SearchBar = () => {

  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSearch() {
    
    setSearchResult("Resultados de búsqueda para " + inputValue);
    return{
      
    }
  }

  return (
    <div className='search-container'>
      <input id='input-value' className='search-input' type="search" placeholder='Enter course name or id...' value={inputValue} onChange={handleInputChange}/>
      <Button onClick={handleSearch} >Search</Button>
      <p>El valor del input es: {inputValue}</p>
    </div>
  )
}

import React from 'react'

export function Input  ({ labelText, placeHolderText , onChange}){
  return (
    <>
      <input id='input-value'  className='search-input'  type="search" placeholder={placeHolderText} onChange={onChange} />
      <label >{labelText}</label>
    </>
  )
}


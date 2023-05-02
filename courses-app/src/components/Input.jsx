import React from 'react'

export function Input  ({ borderColor = 'rgba(246, 246, 59, 0.821)', labelText, placeHolderText , onChange, height}){
  return (
    <>
      <input id='input-value' style={{border: `1px solid ${borderColor}`, height: height}}  className='search-input'  type="search" placeholder={placeHolderText} onChange={onChange} />
      <label >{labelText}</label>
    </>
  )
}


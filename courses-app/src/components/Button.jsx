import React from 'react'

// eslint-disable-next-line react/prop-types
export const Button = ({children, className = 'button', width, onClick}) => {
  
  return (
    <button onClick={onClick} className={className} style={{width: width}}>{children}</button>
  )
}

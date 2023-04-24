import React from 'react'

// eslint-disable-next-line react/prop-types
export const Button = ({children, className = 'button', width}) => {
  return (
    <button className={className} style={{width: width}}>{children}</button>
  )
}

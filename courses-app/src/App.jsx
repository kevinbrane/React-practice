import React from 'react'
import { Header } from './components/Header'
import Course from './components/Course'
export const App = () => {
  return (
    <div>
      <Header/>
      <div className='Body-container'>
        <Course/>
      </div>
    </div>
  )
}

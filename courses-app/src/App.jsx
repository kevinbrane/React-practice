import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header'
import Course from './pages/Course'
import CreateCourse from './pages/CreateCourse'
import { SearchProvider } from './context/SearchContext'

export const App = () => {
  return (
    <BrowserRouter>
    <div className='main'>
      <SearchProvider>
      <Header/>
      <div className='Body-container'>
      <Routes>
       <Route path='/courses'  element={<Course/>} /> 
       <Route path='/create-course' element={<CreateCourse />}  />
      </Routes>
      </div>
    </SearchProvider>
    </div>
    </BrowserRouter>
  )
}

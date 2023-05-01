import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CourseCard } from '../components/CourseCard'
import { SearchBar } from '../components/SearchBar'
import { Button } from '../components/Button'
import '../styles/Course.css'
import {  mockedCoursesList } from '../mocks/mockedCoursesList'
import { useSearchContext } from '../context/SearchContext'


const Course = () => {
  const [data, setData] = useState(mockedCoursesList)
  const { search }  = useSearchContext()
  const navigate = useNavigate()
 

useEffect(()=> {
  if(search){
    setData(mockedCoursesList.filter((course) => course.title.toLocaleLowerCase().includes(search) || course.id.toLocaleLowerCase().includes(search)))
  }else{
    setData(mockedCoursesList)
  }
}, [ search])
 


  return (
    <div className='CourseCard'>
    <div className='course'> 
    <div className='search'>
    <SearchBar/>     
    <Button onClick={()=> navigate('/create-course')} width="180px">Add new course</Button>
    </div>
    {data.map((course) => (
      <CourseCard key={course.id} authorIds={course.authors} title={course.title} duration={course.duration} description={course.description} creationDate={course.creationDate} />
    ))}
      </div>
    </div>
  )
}

export default Course
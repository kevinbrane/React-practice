import React from 'react'
import { CourseCard } from './CourseCard'
import { SearchBar } from './SearchBar'
import { Button } from './Button'
import '../styles/Course.css'
import {  mockedCoursesList } from '../mocks/mockedCoursesList'

const Course = () => {
  return (
    <div className='course'> 
    <div className='search'>
    <SearchBar/>     
    <Button width="180px">Add new course</Button>
    </div>
    {mockedCoursesList.map((course) => (
      <CourseCard key={course.id} authorIds={course.authors} title={course.title} duration={course.duration} description={course.description} creationDate={course.creationDate} />
    ))}
      </div>
  )
}

export default Course
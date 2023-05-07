import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {  mockedCoursesList } from '../mocks/mockedCoursesList'
import { mockedAuthorsList } from '../mocks/mockedAuthorsList'
import { CourseCard } from '../components/CourseCard';


export const CourseInfo = () => {

 /*  const { courseId } = useParams();
  const result = mockedCoursesList.filter(course=>course.id === courseId)[0]
  const authorNames = mockedAuthorsList
    .map((author) => result.authors.filter(resultAuthor => author.id === resultAuthor))

   */

    const { courseId } = useParams();
    const course = mockedCoursesList.find((course) => course.id === courseId);
    const authorNames = course.authors.map((authorId) => {
      const author = mockedAuthorsList.find((author) => author.id === authorId);
      return author.name;
    }); 
    
  console.log(authorNames)

  return (
    <div className="course-info-container">
      <button>Back to courses</button>
      <div className="course-info-header">
        <h1>{result.title}</h1>
        <p>
          {result.description}
        </p>
      </div>
      <div className="course-info-list">
          <div className="course-info-item">
            <h3 className='title-container'>ID: <span className='title'>{result.id}</span></h3>
            <h3>Duration: <span>{result.duration}</span> </h3>
            <h3 className='title-container'>Created: <span className='title'>{result.created} </span> </h3>
            {authorNames.map((author) => {
              return (
                <h3 className='title-container'>Authors: <span className='title'> {author} </span></h3>
              )
            })}
            
          </div>
      </div>
    </div>
  );
};

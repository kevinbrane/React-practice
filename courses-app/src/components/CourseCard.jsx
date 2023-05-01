import React from 'react'
import { mockedAuthorsList } from '../mocks/mockedAuthorsList'
import {Button} from './Button'


// eslint-disable-next-line react/prop-types
export const CourseCard = ({title, duration, creationDate, description , authorIds = []}) => {
  const authorNames =  mockedAuthorsList.filter((author) => authorIds.includes(author.id))
  .map((author) => author.name);
  return (
    <div className='container'>
      <div className='container-left'>
        <h1>{title}</h1>
        <p className='description'>{description}</p>
      </div>
      <div className='container-right'>
        <div className='detail-container'>
        <h3 className='title-container'>Authors: <span className='title'>{authorNames.join(', ')} </span></h3>
        <h3 className='title-container'>Duration: <span className='title'>{duration} </span> </h3>
        <h3 className='title-container'>Created: <span className='title'> {creationDate} </span></h3>
        </div>
        <Button className="button">Show course</Button>
      </div>
    </div>
  )
}

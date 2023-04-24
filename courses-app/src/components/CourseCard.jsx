import React from 'react'

export const CourseCard = ({title, duration, creationDate, description, authors}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <h3>{authors}</h3>
        <h3>{duration}</h3>
        <h3>{creationDate}</h3>
        <button>Show course</button>
      </div>
    </div>
  )
}

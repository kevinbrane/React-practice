import React from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import '../styles/CreateCourse.css'


const CreateCourse = () => {
  return (
    <div className='createCourse'>
      <div className='create-container'>
        <div className='create'>
            <div className='title'>
              <h3>Title</h3>
              <Input placeHolderText='Enter title...'/>
            </div>
            <Button>Create Course</Button>
        </div>
        <h3>Description</h3>
        <textarea  rows="4" cols="50" placeholder='Enter description'></textarea>
      </div>
      <div className='create-info'>
        <div className='left-add-info'>
          <div className='add-author'>
              <h6>Author name</h6>
              <Input placeHolderText='Enter author name...' />
              <Button>Create author</Button>
          </div>
          <div className='duration'>
            <h6>Duration</h6>
            <Input placeHolderText='Enter duration in minutes...' />
          </div>
          </div>
          <div className='right-add-info'>
            <h6>Authors</h6>
            <div className='authors'>
              <h6>Vasily Dobkin</h6>
              <Button>add author</Button>
            </div>
            <div className='course-authors'>
              <h5>Course authors</h5>
              <h6>author list is empty</h6>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CreateCourse
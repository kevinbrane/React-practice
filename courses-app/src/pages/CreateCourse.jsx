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
              <h3 className='title-label'>Title</h3>
              <Input  borderColor='rgb(189 71 34 / 61%)' height={48} placeHolderText='Enter title...'/>
            </div>
            <Button>Create Course</Button>
        </div>
        <h3 className='title-label'>Description</h3>
        <textarea className='textarea' style={{border: "1px solid yellow"}}  rows="8" cols="235" placeholder='Enter description'></textarea>
      </div>
      <div className='create-info'>
        <div className='left-add-info'>
          <div className='add-author'>
              <h3 className='author-label'>Add author</h3>
              <Input borderColor='rgb(189 71 34 / 61%)' height={35} placeHolderText='Enter author name...' />
              <Button>Create author</Button>
          </div>
          <div className='duration'>
            <h3 className='author-label'>Duration</h3>
            <Input borderColor='rgb(189 71 34 / 61%)' height={35} placeHolderText='Enter duration in minutes...' />
            <h2 className='duration-result'>Duration: <span className='duration-time'>00:00</span> hours</h2>
          </div>
          </div>
          <div className='right-add-info'>
            <h3 className='author-label'>Authors</h3>
            <div className='authors'>
              <h4 className='title-label'>Vasily Dobkin</h4>
              <Button>add author</Button>
            </div>
            <div className='course-authors'>
              <h4 className='course-authors-label'>Course authors</h4>
              <h5 className='course-authors-labelList'>Author list is empty</h5>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CreateCourse
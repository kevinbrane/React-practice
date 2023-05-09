import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';

import '../styles/CreateCourse.css'
import {  mockedAuthorsList } from '../mocks/mockedAuthorsList'
import { addCourse } from '../store/courses/thunk'

const CreateCourse = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [authors, setAuthors] = useState(mockedAuthorsList);
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('00:00');

  const removeValue = (id, authorsArray) => {
    const index = authorsArray.findIndex(author => author.id === id);
    return authorsArray.toSpliced(index, 1);
  }

  const addAuthor = (id) => {
    const newAuthorsList = removeValue(id, authors);
    setAuthors(newAuthorsList);
    const authorInfo = authors.filter((author) => author.id === id);
    setCourseAuthors([ ...courseAuthors, ...authorInfo ]);
  }

  const deleteAuthor = (id) => { 
    const authorInfo = courseAuthors.filter((author) => author.id === id);
    setAuthors([ ...authors, ...authorInfo ])
    const newCourseAuthorsList = removeValue(id, courseAuthors);
    setCourseAuthors(newCourseAuthorsList);
  }

  const createAuthor = () => {
    if (authorName !== '') {
      const authorId = uuidv4();
      const newAuthor = {
        id: authorId,
        name: authorName,
      };
      setAuthors([...authors, newAuthor]);
    }
  }

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    setDuration(`${hours}:${minutes}`)
  }

  const onSubmit = () => {
    const body = {
      title,
      description,
      duration,
      authors
    }
    addCourse(body, token)(dispatch);
  }

  return (
    <Form>
      <div className='createCourse'>
        <div className='create-container'>
          <div className='create'>
              <div className='title'>
                <h3 className='title-label'>Title</h3>
                <Form.Item  rules={[{ required: true, message: 'please enter the course title!' }]} placeholder='Enter title...' name="title">
                  <Input className='titleInput' onChange={(event) => setTitle(event.target.value)}/>
                </Form.Item>
              </div>
              <Button onClick={onSubmit}>Create Course</Button>
          </div>
          <h3 className='title-label'>Description</h3>
          <Form.Item rules={[{ required: true, message: 'please enter the description of the course!' }]} placeholder='Enter description...' name="description">
            <Input.TextArea className='textarea' onChange={(event) => setDescription(event.target.value)} />
          </Form.Item>
        </div>
        <div className='create-info'>
          <div className='left-add-info'>
            <div className='add-author'>
                <h3 className='author-label'>Add author</h3>
                <Form.Item placeholder='Enter author name...' name="authorName">
                  <Input className='authorname' onChange={(event) => setAuthorName(event.target.value)}  />
                </Form.Item>
                <Button onClick={createAuthor}>Create author</Button>
            </div>
            <div className='duration'>
              <h3 className='author-label'>Duration</h3>
              <Form.Item placeholder='Enter duration in minutes...' name="duration" rules={[{ required: true, message: 'please enter the description of the course!' }]}>
                  <Input type='number' onChange={(event) => toHoursAndMinutes(event.target.value)}/>
                </Form.Item>
              <h2 className='duration-result'>Duration: <span className='duration-time'>{duration}</span> hours</h2>
            </div>
            </div>
            <div className='right-add-info'>
              <h3 className='author-label'>Authors</h3>
              <div className='authors'>
                {authors.length === 0 ? 
                  <h5 className='course-authors-labelList'>Author list is empty</h5> 
                  : authors.map((author) => {
                    return (
                      <div key={author.id} className='author-container'>
                        <h4 className='author-name'>{author.name}</h4>
                        <Button onClick={() => addAuthor(author.id)}>Add author</Button>
                      </div>
                    )
                  })}
              </div>
              <div className='course-authors'>
                <h4 className='course-authors-label'>Course authors</h4>
                {courseAuthors.length === 0 ?
                  <h5 className='course-authors-labelList'>Author list is empty</h5>
                  : courseAuthors.map((author) => {
                    return (
                      <div key={author.id} className='author-container'>
                        <h4 className='author-name'>{author.name}</h4>
                        <Button onClick={() => deleteAuthor(author.id)}>Delete author</Button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </div>
      </div>
    </Form>
  )
}

export default CreateCourse
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mockedCoursesList } from "../mocks/mockedCoursesList";
import { mockedAuthorsList } from "../mocks/mockedAuthorsList";

export const CourseInfo = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const result = mockedCoursesList.filter(
    (course) => course.id === courseId
  )[0];
  const authorNames = result.authors.map((author) => {
    return mockedAuthorsList.filter((resultAuthor) => {
      if (author === resultAuthor.id) return true;
    });
  });

  return (
    <div className="course-info-container">
      <button onClick={() => navigate('/courses')}>Back to courses</button>
      <div className="course-info-header">
        <h1>{result.title}</h1>
        <p>{result.description}</p>
      </div>
      <div className="course-info-list">
        <div className="course-info-item">
          <h3 className="title-container">
            ID: <span className="title">{result.id}</span>
          </h3>
          <h3>
            Duration: <span>{result.duration}</span>{" "}
          </h3>
          <h3 className="title-container">
            Created: <span className="title">{result.created} </span>{" "}
          </h3>
          {authorNames.flat().map((author) => {
            return (
              <h3 className="title-container">
                Authors: <span className="title"> {author.name} </span>
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

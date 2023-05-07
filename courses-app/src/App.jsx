import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Course from "./pages/Course";
import CreateCourse from "./pages/CreateCourse";
import { SearchProvider } from "./context/SearchContext";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { CourseInfo } from "./pages/CourseInfo";

export const App = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <div className="main">
        <SearchProvider>
          <Header />
          <div className="Body-container">
            <Routes>
              <Route path="/courses" element={<Course />} />
              <Route path="/create-course" element={<CreateCourse />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/" element={!token ? <Login /> : <Course />} />
              <Route path="/login" element={<Login />} />
              <Route path="/course/:courseId" element={<CourseInfo />} />
            </Routes>
          </div>
        </SearchProvider>
      </div>
    </BrowserRouter>
  );
};

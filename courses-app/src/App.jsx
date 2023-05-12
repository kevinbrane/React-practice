import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "./components/Header";
import Course from "./pages/Course";
import CreateCourse from "./pages/CreateCourse";
import { SearchProvider } from "./context/SearchContext";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { CourseInfo } from "./pages/CourseInfo";
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import CourseForm  from "./components/CourseForm/CourseForm";

import { loginSuccess, loginFailure, logout } from './store/user/actionCreators'

const App = () => {
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
              <Route path="/course/:courseId" element= {<PrivateRoute> <CourseInfo/></PrivateRoute>}/>
              <Route path='/courses/update/:courseId'element={<PrivateRoute><CourseForm /></PrivateRoute>}/>
            </Routes>
          </div>
        </SearchProvider>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  loginSuccess: (user, token , rol) => dispatch(loginSuccess(user, token, rol)),
  loginFailure: (error) => dispatch(loginFailure(error)),
  logout: () => dispatch(logout),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
import axios from "axios";
import { createCourse } from "./actionCreators";

export const addCourse = (course, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/courses/add",
        course,
        {
          headers: { Authorization: token },
        }
      );
      dispatch(
        createCourse(response.data)
      );
    } catch (error) {
      console.error(error);
    }
  };
};

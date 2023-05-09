import { CREATE_COURSE } from './actionTypes';
import { mockedCoursesList } from '../../mocks/mockedCoursesList';

const initialState = {
  coursesList: mockedCoursesList,
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return {
        ...state,
        coursesList: {
          ...state.coursesList,
          ...action.payload
        },
      };
    default:
      return state;
  }
};

export default coursesReducer;
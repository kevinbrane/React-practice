import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import CourseForm from '../CourseForm';
import configureStore from '../../../store/configureStore';

describe('CourseForm component', () => {
  it('renders correctly', () => {
    const mockedState = {
      user: {
        isAuth: true,
        name: 'Test Name',
      },
      courses: [],
      authors: [],
    };
    const store = configureStore(mockedState);
    const { getByTestId } = render(
      <Provider store={store}>
        <CourseForm />
      </Provider>
    );
    expect(getByTestId('course-form')).toBeInTheDocument();
  });
});
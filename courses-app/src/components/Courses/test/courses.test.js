import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Courses from '../Courses';
import configureStore from '../../../store/configureStore';

describe('Courses component', () => {
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
        <Courses />
      </Provider>
    );
    expect(getByTestId('courses')).toBeInTheDocument();
  });
});
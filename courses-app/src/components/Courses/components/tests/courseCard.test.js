import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CourseCard from './CourseCard';

const mockStore = configureStore([]);

describe('CourseCard component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      courses: [{
        id: 1,
        title: 'Course 1',
        category: 'React',
        authorId: 1,
        slug: 'course-1'
      }]
    });

    component = render(
      <Provider store={store}>
        <CourseCard course={store.getState().courses[0]} />
      </Provider>
    );
  });

  it('should render course title', () => {
    const { getByText } = component;
    const title = getByText('Course 1');
    expect(title).toBeInTheDocument();
  });

  it('should render course category', () => {
    const { getByText } = component;
    const category = getByText('React');
    expect(category).toBeInTheDocument();
  });

  it('should render course author', () => {
    const { getByText } = component;
    const author = getByText('by Author');
    expect(author).toBeInTheDocument();
  });
});







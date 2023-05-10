import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Header from '../Header';
import configureStore from '../../../store/configureStore';

describe('Header component', () => {
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
        <Header />
      </Provider>
    );
    expect(getByTestId('header')).toBeInTheDocument();
  });
});
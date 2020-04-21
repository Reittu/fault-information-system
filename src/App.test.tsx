import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

it('renders with a specific search field', () => {
  //console.log(store.getState());
  const { getByLabelText } = renderComponent();
  const textField = getByLabelText(/search for a location.../i);
  expect(textField).toBeInTheDocument();
});

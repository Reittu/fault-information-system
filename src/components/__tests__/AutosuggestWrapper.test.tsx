import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup } from '@testing-library/react';
import AutosuggestWrapper from '../AutosuggestWrapper';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <AutosuggestWrapper />
    </Provider>
  );

it('renders with a specific search field', () => {
  const { getByLabelText } = renderComponent();
  const textField = getByLabelText(/search for a location.../i);
  expect(textField).toBeInTheDocument();
});

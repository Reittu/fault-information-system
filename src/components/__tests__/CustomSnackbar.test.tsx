import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup } from '@testing-library/react';
import CustomSnackbar from '../CustomSnackbar';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <CustomSnackbar />
    </Provider>
  );

it('should be hidden by default', () => {
  const { container } = renderComponent();
  expect(container.firstChild).not.toBeInTheDocument();
});

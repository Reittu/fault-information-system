import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup } from '@testing-library/react';
import CustomAppBar from '../CustomAppBar';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <CustomAppBar />
    </Provider>
  );

it('renders with an opening button', () => {
  const { getByLabelText } = renderComponent();
  const openDrawerButton = getByLabelText(/open drawer/i);
  expect(openDrawerButton).toBeInTheDocument();
});

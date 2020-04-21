import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup } from '@testing-library/react';
import ToolGroup from '../ToolGroup';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <ToolGroup />
    </Provider>
  );

it('renders with a new fault button', () => {
  const { getByTitle } = renderComponent();
  const newReportButton = getByTitle(/report new faults/i);
  expect(newReportButton).toBeInTheDocument();
});

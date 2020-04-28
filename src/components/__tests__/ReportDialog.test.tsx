import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup } from '@testing-library/react';
import ReportDialog from '../ReportDialog';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <ReportDialog />
    </Provider>
  );

it('should be hidden (not render) as stated by default redux state', () => {
  const { container } = renderComponent();
  expect(container.firstChild).not.toBeInTheDocument();
});

/*
it('renders with a save button when opened', () => {
  const { getByText } = renderComponent();
  // ... dispatch(openDialog())
  const saveButton = getByText(/save/i);
  expect(saveButton).toBeInTheDocument();
  expect(saveButton.nodeName).toBe('BUTTON');
});
*/
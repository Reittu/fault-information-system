import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup } from '@testing-library/react';
import ToolDrawer from '../ToolDrawer';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <Provider store={store}>
      <ToolDrawer />
    </Provider>
  );

it('renders with a drawer button', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('drawer-button')).toBeInTheDocument();
  });

import { snackbarMessage } from './snackbar';
import { showSpinner, hideSpinner } from '../actions';
import { Dispatch } from 'redux';

export const asyncActionLoaderWrapper = async (
  loadingStateSetter: React.Dispatch<boolean>,
  dispatch: Dispatch,
  action: () => Promise<any>,
  errorHandler?: (error: Error) => any
) => {
  try {
    loadingStateSetter(true);
    dispatch(showSpinner());
    await action();
  } catch (err) {
    if (errorHandler) errorHandler(err);
    else snackbarMessage(err.message, 'error', dispatch);
  } finally {
    dispatch(hideSpinner());
    loadingStateSetter(false);
  }
};

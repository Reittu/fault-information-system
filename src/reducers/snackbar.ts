import { PayloadAction, Snackbar } from '../types';

const initialState: Snackbar = { message: '', open: false, severity: undefined };

const snackbarReducer = (
  state = initialState,
  action: PayloadAction<Snackbar>
): Snackbar => {
  switch (action.type) {
    case 'SNACKBAR':
      return action.payload;
    default:
      return state;
  }
};

export default snackbarReducer;

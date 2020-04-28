import drawerReducer from './drawer';
import viewportReducer from './viewport';
import toolReducer from './tool';
import markerReducer from './markers';
import snackbarReducer from './snackbar';
import spinnerReducer from './spinner';
import userReducer from './user';
import { reportDialogReducer, userDialogReducer } from './dialog';

import { combineReducers, Action } from 'redux';

const allReducers = combineReducers({
  reportDialog: reportDialogReducer,
  userDialog: userDialogReducer,
  drawerIsOpen: drawerReducer,
  markers: markerReducer,
  snackbar: snackbarReducer,
  spinner: spinnerReducer,
  tool: toolReducer,
  viewport: viewportReducer,
  user: userReducer
});

export const rootReducer = (state: any, action: Action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return allReducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

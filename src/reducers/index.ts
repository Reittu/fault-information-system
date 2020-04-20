import drawerReducer from './drawer';
import viewportReducer from './viewport';
import toolReducer from './tool';
import markerReducer from './markers';
import snackbarReducer from './snackbar';
import spinnerReducer from './spinner';
import { dialogStateReducer, dialogContentReducer } from './dialog';

import { combineReducers, Action } from 'redux';

const allReducers = combineReducers({
  dialogContent: dialogContentReducer,
  dialogIsOpen: dialogStateReducer,
  drawerIsOpen: drawerReducer,
  markers: markerReducer,
  snackbar: snackbarReducer,
  spinner: spinnerReducer,
  tool: toolReducer,
  viewport: viewportReducer
});

export const rootReducer = (state: any, action: Action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return allReducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

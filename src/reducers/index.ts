import drawerReducer from './drawer';
import viewportReducer from './viewport';
import toolReducer from './tool';
import markerReducer from './markers';
import { dialogStateReducer, dialogContentReducer } from './dialog';

import { combineReducers, Action } from 'redux';

const allReducers = combineReducers({
    dialogContent: dialogContentReducer,
    dialogIsOpen: dialogStateReducer,
    drawerIsOpen: drawerReducer,
    markers: markerReducer,
    tool: toolReducer,
    viewport: viewportReducer,
});

// Required for state reset
export const rootReducer = (state: CombinedState, action: Action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return allReducers(state, action)
}

type CombinedState = ReturnType<typeof allReducers>;
export type RootState = ReturnType<typeof rootReducer>;
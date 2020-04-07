import drawerReducer from './drawer';
import viewportReducer from './viewport';
import toolReducer from './tool';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    drawerIsOpen: drawerReducer,
    viewport: viewportReducer,
    tool: toolReducer,
});

// Required for state reset
export const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return allReducers(state, action)
}
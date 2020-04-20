import { Action } from 'redux';

const spinnerReducer = (state: boolean = true, action: Action): boolean => {
    switch(action.type) {
        case 'SHOW-SPINNER':
            return true;
        case 'HIDE-SPINNER':
            return false;
        default:
            return state;
    }
}

export default spinnerReducer;
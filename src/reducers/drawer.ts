import { Action } from "redux";

const drawerReducer = (state: boolean = false, action: Action): boolean => {
    switch(action.type) {
        case 'OPEN-DRAWER':
            return true;
        case 'CLOSE-DRAWER':
            return false;
        default:
            return state;
    }
}

export default drawerReducer;
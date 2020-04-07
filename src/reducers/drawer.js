const drawerReducer = (state = false, action) => {
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
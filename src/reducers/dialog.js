export const dialogStateReducer = (state = false, action) => {
    switch (action.type) {
        case 'OPEN-DIALOG':
            return true;
        case 'CLOSE-DIALOG':
            return false;
        default:
            return state;
    }
}

export const dialogContentReducer = (state = { text: '', description: '', markerIndex: 0 }, action) => {
    switch (action.type) {
        case 'SET-DIALOG':
            return action.payload;
        default:
            return state;
    }
}
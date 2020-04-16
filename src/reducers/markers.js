const markerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET-MARKERS':
            return action.payload;
        default:
            return state;
    }
}

export default markerReducer;
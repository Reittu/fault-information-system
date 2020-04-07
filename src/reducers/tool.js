const toolReducer = (state = 'add', action) => {
    switch (action.type) {
        case 'TOOL':
            return action.payload;
        default:
            return state;
    }
}

export default toolReducer;
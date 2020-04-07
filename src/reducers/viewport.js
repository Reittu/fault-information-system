const initialState = {
    longitude: 26.2,
    latitude: 62.1,
    zoom: 4.9,
    bearing: 0,
    pitch: 0
}

const viewportReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEWPORT':
            return action.payload;
        default:
            return state;
    }
}

export default viewportReducer;
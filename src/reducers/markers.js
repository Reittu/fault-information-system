import MARKERDATA from '../sample-data.json';
const markerArray = MARKERDATA.features;

const markerReducer = (state = markerArray, action) => {
    switch (action.type) {
        case 'SET-MARKERS':
            return action.payload;
        default:
            return state;
    }
}

export default markerReducer;
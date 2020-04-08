import MARKERDATA from '../sample-data.json';
const markerArray = MARKERDATA.features;

const markerReducer = (state = markerArray, action) => {
    switch (action.type) {
        case 'SET-MARKERS':
            console.log("Set markers called")
            return action.payload;
        default:
            return state;
    }
}

export default markerReducer;
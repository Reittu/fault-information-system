import { Marker, MarkerAction } from "../types";

const markerReducer = (state: Marker[] = [], action: MarkerAction): Marker[] => {
    switch (action.type) {
        case 'SET-MARKERS':
            return action.payload;
        default:
            return state;
    }
}

export default markerReducer;
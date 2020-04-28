import { Marker, PayloadAction } from '../types';

const markerReducer = (state: Marker[] = [], action: PayloadAction<Marker[]>): Marker[] => {
    switch (action.type) {
        case 'MARKERS':
            return action.payload;
        default:
            return state;
    }
}

export default markerReducer;
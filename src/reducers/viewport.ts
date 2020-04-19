import { Viewport, PayloadAction } from '../types';

const initialState: Viewport = {
    longitude: 26.2,
    latitude: 62.1,
    zoom: 4.9,
    bearing: 0,
    pitch: 0
}

const viewportReducer = (state: Viewport = initialState, action: PayloadAction<Viewport>): Viewport => {
    switch (action.type) {
        case 'VIEWPORT':
            return action.payload;
        default:
            return state;
    }
}

export default viewportReducer;
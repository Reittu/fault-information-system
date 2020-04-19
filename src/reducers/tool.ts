import { Tool, PayloadAction } from '../types';

const toolReducer = (state: Tool = 'edit', action: PayloadAction<Tool>): Tool => {
    switch (action.type) {
        case 'TOOL':
            return action.payload;
        default:
            return state;
    }
}

export default toolReducer;
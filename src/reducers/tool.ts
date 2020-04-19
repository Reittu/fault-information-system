import { Tool, ToolAction } from "../types";

const toolReducer = (state: Tool = 'edit', action: ToolAction): Tool => {
    switch (action.type) {
        case 'TOOL':
            return action.payload;
        default:
            return state;
    }
}

export default toolReducer;
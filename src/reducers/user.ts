import { PayloadAction, User } from "../types";

const userReducer = (state: User = null, action: PayloadAction<User>): User => {
    switch (action.type) {
        case 'USER':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;
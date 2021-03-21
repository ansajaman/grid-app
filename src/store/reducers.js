import {GRID_ACTION_TYPES} from "./gridActionTypes";

const initialState = {
    users: []
}

export const gridReducer = (state = initialState, action) => {
    switch (action.type) {
        case GRID_ACTION_TYPES.ADD_USER:
            return {
                ...state,
                users: [action.data, ...state.users]
            }
        case GRID_ACTION_TYPES.GET_ALL_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state;
    }
};

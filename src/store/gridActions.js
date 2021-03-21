import {http} from "../utility/http";
import {GRID_ACTION_TYPES} from "./gridActionTypes";

export const addUser = (data) => ({
    type: GRID_ACTION_TYPES.ADD_USER,
    data
});

export function getAllUsers() {
    return (dispatch) => {
        http.get('/users').then((res) => {
            dispatch({type : GRID_ACTION_TYPES.GET_ALL_USERS, data: res.data});
        });
    };
}
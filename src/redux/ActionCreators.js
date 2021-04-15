import { ADD_TODO, REMOVE_TODO } from './ActionTypes';

export function AddUser(payload) {
    return {
        type: ADD_TODO,
        payload,
    };
}

export function RemoveUser(payload) {
    return {
        type: REMOVE_TODO,
        payload,
    };
}

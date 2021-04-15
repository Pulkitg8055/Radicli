import { ADD_TODO, REMOVE_TODO } from './ActionTypes';

const initialState = {
    users: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.name !== action.payload
                ),
            };
        default:
            return state;
    }
}

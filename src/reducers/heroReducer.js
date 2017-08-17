import * as types from "../actions/actionTypes";

export default function heroReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_HERO:
            return [...state, //spread the current state into a new array
                Object.assign({}, action.hero) //add the new immutable value copied from the action
            ];
        default:
            return state;
    }
}
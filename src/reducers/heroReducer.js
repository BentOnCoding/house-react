import * as types from "../actions/actionTypes";

export default function heroReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_HEROES_SUCCESS:
            return action.heroes;
        default:
            return state;
    }
}
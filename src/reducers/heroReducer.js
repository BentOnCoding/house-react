export default function heroReducer(state = [], action) {
    switch (action) {
        case "CREATE_HERO":
            return [...state, //spread the current state into a new array
                Object.assign({}, action.hero) //add the new immutable value copied from the action
            ];
        default:
            return state;
    }
}
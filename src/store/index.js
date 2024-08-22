import { createStore } from "redux";

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;
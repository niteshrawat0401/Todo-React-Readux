import { legacy_createStore as createStore, combineReducers } from "redux";
import {todosReducer } from "../../p-3/todo/reducer"

const rootReducer = combineReducers( {todos : todosReducer} )

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

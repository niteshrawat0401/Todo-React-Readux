import { combineReducers, legacy_createStore as createStore } from "redux";
import { countReducer } from "../counter/reducer";
import { todoReducer } from "./reducer";

const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
});

export const store = createStore(
    rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

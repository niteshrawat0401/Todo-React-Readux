import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { todosReducer } from "../todocopy/reducer";

const rootReducer = combineReducers({ todos: todosReducer });
// then you will use middleware with some logic that can accomodate that;

const middleware = (store) => (next) => (action) => {
  //this middleware will tell us the type of action that has been dispatched
  console.log("type of action ", typeof action);

  //what if the action that gets dispatched is not an object and it is a function'
  if (typeof action === "function") {
    // in that scenario; invoke that function;

    return action(store.dispatch);
  }
  next(action);
};
// if action is object; move to next middleware if exists else move to reducer;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// const middlewares = applyMiddleware[middleware1, middleware2];

const enhancer = composeEnhancers(
  applyMiddleware(middleware)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);

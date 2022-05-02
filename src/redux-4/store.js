import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { reducer } from "./reducer";

// export const store = createStore(reducer);
//createstore (reducer, initstate,  enhancer add more functionality to store)

const middleware1 = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
// middleware allow you to change with this change with action, read the action and change the action
// if ther is no other middleware it will go to reducer ---> store

const middleware2 = (store) => (next) => (action) => {
  // action.payload = 3
  console.log(action);
  next(action);
};


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;


// const middlewares = applyMiddleware[middleware1, middleware2];

const enhancer = composeEnhancers(
  applyMiddleware(middleware1, middleware2)
  // other store enhancers if any
);

export const store = createStore(reducer, enhancer);

store.subscribe(() => {
  console.log("current store", store.getState());
});

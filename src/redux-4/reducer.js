import { INCREMENT, DECREMENT } from "./actions";

const initState = { count: 0 };

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

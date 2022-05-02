import {
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  SOMETHING_WRONG,
  DELETE_TODO,
} from "./action";

const initState = {
  loading: false,
  error: false,
  todos: [],
};

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        todos: [],
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        todos: action.payload
      };
    case SOMETHING_WRONG:
      return {
        ...state,
        loading: false,
        error: true,
        todos : []
      };
      case DELETE_TODO :{
        return{
            ...state,
            todos : state.todos.filter((todo) => todo.id !== action.payload) 
        }
    }
    default:
      return state;
  }
};

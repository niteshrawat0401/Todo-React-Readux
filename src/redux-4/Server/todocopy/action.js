import axios from "axios";
export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCESS";
export const SOMETHING_WRONG = "SOMETHING_WRONG";
export const DELETE_TODO = "DELETE_TODO";

export const todosLoading = () => ({
  type: GET_TODOS_LOADING,
});

export const todosSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});

export const todosWrong = () => ({
  type: SOMETHING_WRONG,
});

export const getTodosData = () => (dispatch) => {
  dispatch(todosLoading());
  fetch(`http://localhost:3000/todos`)
    .then((res) => res.json())
    .then((res) => dispatch(todosSuccess(res))) // update your redux store with the latest data from server as soon as the Component mounts onto UI;
    .catch(() => dispatch(todosWrong()));
};

export const deleteTodo = async (dispatch, id) => {
  let r = await axios.delete(`http://localhost:3000/todos/${id}`);
  let data = await r.data;
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

// is there a way in which i can  dispatch one action and that action in turn can dispatch diffrent actions; basically when it comes to async requests

//getTodosData is an action;

// it is a kind of action which is not an object but rather a function which has dispatch argument;

//if you want to have an action in such a way that is's a function which will return a function which it return will have acess to dispatch method of redux store.

// export const getTodosData = (dispatch) => {
//     dispatch(todosLoading());
//     fetch(`http://localhost:3000/todos`)
//     .then((res) => res.json())
//     .then((res) => dispatch(todosSuccess(res)))  // update your redux store with the latest data from server as soon as the Component mounts onto UI;
//     .catch(() => dispatch(todosWrong()));
// };

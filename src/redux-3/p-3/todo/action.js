export  const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export  const GET_TODOS_SUCCESS = "GET_TODOS_SUCESS";
export  const SOMETHING_WRONG   = "SOMETHING_WRONG";

export const todosLoading = () => ({
    type : GET_TODOS_LOADING
});

export const todosSuccess = (payload) =>({
    type : GET_TODOS_SUCCESS,
    payload
})

export const todosWrong = () =>({
    type : SOMETHING_WRONG
})
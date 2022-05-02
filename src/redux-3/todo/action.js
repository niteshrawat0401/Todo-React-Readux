// action type
export const ADD_TODO = "ADD_TODO";

// action creator

// export const addTodo = (payload) => {
//     return { type : ADD_TODO, payload};
// }

export const addTodo = (payload) => ({
     type : ADD_TODO,
      payload
    });
import React, { Component } from "react";
import { TodoInput } from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { todosLoading, todosSuccess, todosWrong } from "../../todo/action";

export const Todo = () => {
  const { loading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  React.useEffect(() =>{
    dispatch(todosLoading());
    fetch(`http://localhost:3000/todos`)
    .then((res) => res.json())
    .then((res) => dispatch(todosSuccess(res)))  // update your redux store with the latest data from server as soon as the Component mounts onto UI;
    .catch(() => dispatch(todosWrong()))
  }, [dispatch])

  return loading ? (
    <h1>Loading....</h1>
  ) : error ? (
    <h1>Something went wrong....</h1>
  ) : (
    <div>
      <TodoInput />
      <br />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

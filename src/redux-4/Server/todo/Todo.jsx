import React, { Component } from "react";
import { TodoInput } from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { getTodosData } from "../todocopy/action";

export const Todo = () => {
  const { loading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTodosData());
    // getTodosData(dispatch);
  }, [dispatch]);

  return loading ? (
    <h3>Loading....</h3>
  ) : error ? (
    <h3>Something went wrong....</h3>
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

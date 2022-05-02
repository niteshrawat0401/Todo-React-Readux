import React from "react";
import { TodoInput } from "./TodoInput";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const { todos } = useSelector((state) => state.todos);
  // console.log(todos);
  return (
    <div>
      <TodoInput />
      <br />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

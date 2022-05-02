import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../todocopy/action";

export const TodoItem = ({ id, title, status }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    deleteTodo(dispatch, id);
  };

  return (
    <div>
      <i>{title}</i>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

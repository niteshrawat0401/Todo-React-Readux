import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import {addTodo} from "../../todo/action"
import { useDispatch } from "react-redux";

export const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };
    dispatch(addTodo(payload));
    setTitle("")
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="ADD TODO"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
};

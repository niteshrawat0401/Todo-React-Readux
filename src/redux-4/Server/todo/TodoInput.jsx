import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { getTodosData } from "../todocopy/action";

export const TodoInput = () => {
  const [title, setTitle] = React.useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };
    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      dispatch(getTodosData());
      // getTodosData(dispatch);
      //dispatch(action)  from your component
    });
    setTitle("");
  };

  return (
    <div>
      <input
        // type="text"
        placeholder="ADD TODO"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
};

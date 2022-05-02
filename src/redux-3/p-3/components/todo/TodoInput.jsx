import React from "react";
import { v4 as uuid } from "uuid";
import { todosLoading, todosSuccess, todosWrong } from "../../todo/action";
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
    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json"
     },
    }).then(() => {
      dispatch(todosLoading())
      fetch(`http://localhost:3000/todos`)
        .then((res) => res.json())
        .then((res) => dispatch(todosSuccess(res)))
        .catch((err) => dispatch(todosWrong(err)))
    });
    setTitle("");
  };

  return(
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

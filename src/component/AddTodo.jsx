import React, { useState } from "react";

export const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const postTodo = async (value) => {
    let response = await fetch("http://localhost:3000/todos/", {
      method: "POST",
      headers: { "content-type": "application/json" },
    
      body: JSON.stringify({
        value,
        completed: false,
      }),
    });
    // adding last data
    let data = await response.json();
    onAdd(data);
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>

      <button
        onClick={() => {
          let value = newTodo.trim();
          if (value) {
            postTodo(newTodo);
            setNewTodo("");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

import React from "react";
// import styles from "../component/"

export const Todo = ({ todo, onDelete, onEdit }) => {
  const deleteTodo = async () => {
    await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    onDelete(todo.id);
    //  let data =await response.Json();
    //  console.log(data)
  };
  const editTodo = async () => {
    let response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        body: "12345",
        completed: true,
      }),
    });

    let data = await response.Json();
    onEdit(data);
    //  console.log(data)
  };

  return (
    <div
      className="lineThrought"
      // {`${styles.flex} ${todo.completed ? styles.line-through : ""}`}
    >
      <div>{todo.value}</div>
      <div>
        <button onClick={editTodo}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

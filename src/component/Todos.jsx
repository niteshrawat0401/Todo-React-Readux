import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
 
  // when add new data come
const onAdd = (newTodo) =>{
    setTodos([...todos,newTodo]);
  };

  const onDelete = (id) =>{
    const newTodos = todos.filter(todo=> todo.id !==id);
    setTodos(newTodos)
  }
  // single object 
  const onEdit = (updateTodo) =>{
    const newTodos = todos.map((todo)=>{
      if(todo.id === updateTodo.id ) return updateTodo
      else return todo
    })
    setTodos(newTodos)
  }

  useEffect(() =>{
    const getTodos = async () => {
      try{
        let response = await fetch("http://localhost:3000/todos/")
        let data = await response.json()
        console.log(data);
        // when  function updates (state) whole function reender again
        setTodos(data)
      }
      catch(error){
        console.log(error)
      };
    };
     getTodos()
  },[]);

  return (
    <div>
      <AddTodo onAdd={onAdd} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

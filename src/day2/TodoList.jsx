import { useState } from "react";
import {nanoid} from "nanoid"
import TodoItem from "./Todoitem";


const TodoList = ()=>{
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([])
    const [isLoggedIn,setLoggedIn] = useState(false)
    const [isLoading,setLoading] = useState(false)
 
    const handleChange = (e) =>{
        setTask(e.target.value)
    };
    

    const handleClick = (e)=>{
        // ["task1","task2"]

        const taskObj = {
            title : task,
            status : false,
            id : nanoid()

        };

        setTodo([...todo,taskObj])
    };

    const handleDelete = (id)=>{
        console.log(id)

        let newTodo = todo.filter((item) => item.id != id)  //all array with the filltered data
        setTodo(newTodo)
    };
 
    const handleLogin = ()=>{
        setLoggedIn(true)
    }
    const handleLogout = ()=>{
        setLoggedIn(false)
    }

    if(!isLoggedIn){
        return <h1>use not logged in <button onClick={handleLogin}>Login</button></h1>
    }

    return(
        <>
        {isLoading && <h2>Loading......</h2>}
         <>
        <button onClick={handleLogout}>Logout</button>
        <input 
        type="text"
        placeholder="Enter here" 
        value={task} 
        onChange = {handleChange}
         />
       <button onClick={handleClick}>Add Todo</button>
       {todo.length?todo.map((item,index)=>{
           return <TodoItem key={item.id} {...item} handleRemove = {handleDelete} isEven = {index%2 ==0 ?true : false} />
       
       }) : <h1>no todo exist</h1>} 
        </> 
       
       </>
    );   
};
export default TodoList

// rendring mean taken

// when true render it
// short circuit
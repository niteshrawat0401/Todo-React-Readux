
import React from "react";

const TodoItem = (props)=>{
    console.log(props)
    const {title,id,status,handleRemove, isEven} = props
    console.log(isEven)
    if(isEven=="nitesh"){
      return null
    }
    return (
        <>
          <h1 style={{color:isEven?"blue" : "yellowgreen"  }} > {title}</h1>
          <button onClick={()=>handleRemove(id)}>Delete</button>
          {/* <button onClick={()=>handleToggle(id)}>Switch</button> */}
        </>
    )
}
export default TodoItem
// {

// }
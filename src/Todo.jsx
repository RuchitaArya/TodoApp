import React, { useState } from "react";
import "./Todo.css"


 
function Todo(){
    const[inputVal, SetinputVal]= useState("");
    const [todo, settodo]=useState([])
    function TodoAdd(){
        settodo((todo)=>{
            const updatedTodo=[...todo, inputVal]
            SetinputVal("")
            return updatedTodo;
        })
    }
    function TodoRemove(i){
        const NewList=[...todo]
        NewList.splice(i,1)
            settodo(NewList);
    }
    return(
        <>
        <div className="TodoItem">
        <div className="inputvalue">
            <input className="m-9" type="text" placeholder="Enter Value..." value={inputVal} onChange={(e)=> SetinputVal(e.target.value)} />
            <button className="buTTon" onClick={TodoAdd}>Add</button><br />
        </div>
        </div>
        { todo.map((data,i)=>{
            return(
                <div className="nextTodo" key={i}>
                    {data} 
               <input type="text" /> <button className="editButton">Edit</button><button className="RemoveButton" onClick={()=>TodoRemove(i)}>Remove</button></div>
            )
        })}
        
       
        </>
    );
}
export default Todo;
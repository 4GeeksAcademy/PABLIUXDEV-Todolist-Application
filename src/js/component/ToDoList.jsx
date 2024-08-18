import React, {useState} from "react";
import Task from "./Task.jsx"

const ToDoList = () => {

const [newTask, setNewTask] = useState("")

const [taskList, setTaskList] = useState([]);


return (
    <div className="container">
        <div className="card">
        <div className="card-header h1">
            To Do's
            <div className="card-body h5">
        <input className="m-2 h6 input-group text-center" type="text" value={newTask} placeholder="What do you want to do next?" 
        onChange={(event) => setNewTask(event.target.value)} 

        onKeyUp={(event) => {
        if(event.key == "Enter") {
            setTaskList([newTask, ...taskList])
            setNewTask("");
        }
        }}  

        />
        {(taskList.length == 0) && <div>No more tasks! Time for a drink!</div>}
        {taskList.map( (tarea, indice)=> <Task task={tarea} key={indice} onRemove= {()=>{
            setTaskList(taskList
                .filter((tarea, indiceABorrar)=> indice != indiceABorrar))
        }}/>)}
        <p>{taskList.length} Items Left</p>
        </div>
        </div>
        </div>
        </div>
        )
}



export default ToDoList;
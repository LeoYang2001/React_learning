import { useState } from "react";

function TaskList({taskList , onDeleteTask, onChangeTask, onFinishTask}){
    return (
        <ul>
            {
                taskList.map(task => 
                   ( <li key={task.id}>
                        <Task onFinish={onFinishTask} onChangeTask={onChangeTask} onDelete={onDeleteTask} task = {task}></Task>
                    </li> )   
                )
            }
        </ul>
    )
}

function Task({task,onDelete,onChangeTask, onFinish}){

    const [isEditing, SetIsEditing] = useState(false)
    
    function handleClick(task){
        onDelete(task.id)
    }

    function handleChange(todo){
        onChangeTask({...task,todo:todo})    
    }

    function handleFinish(id){
        
        onFinish(id)
    }

    return (
       <>
        {
            isEditing ? 
            (<>
                <input onChange={(e) => {handleChange(e.target.value)}} value={task.todo}></input>
                <button onClick={()=>{SetIsEditing(false)}}>Save</button>
            </>)
             :
            (<>
                {
                    task.isDone ? 
                    (
                        <button onClick={()=>{handleFinish(task.id)}}>UnFinish</button>
                    ):
                    (
                        <button onClick={()=>{handleFinish(task.id)}}>Finish</button>
                    )
                }
                <span style={{margin: '0px 10px', textDecoration : task.isDone ? 'line-through' : 'dashed'}}>{task.todo}</span>
                {
                    !task.isDone && <button onClick={()=>{SetIsEditing(true)}}>Edit</button>
                }
                <button onClick={()=> handleClick(task)}>Delete</button> 
            </>)
        }
       </>
    )
}


export default TaskList;
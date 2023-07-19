import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

import { useState } from "react";



function App(){
  const [ taskList , setTaskList] = useState(ini_taskList);

  function handleDelete(id){
    setTaskList(taskList.filter((task)=> task.id != id))
  }

  function handleAdd(text){
      const task = {
        id: nextId++,
        todo:text,
        isDone:false
      }
      
      setTaskList([...taskList,task])
  } 

  function handleChange(task){
    setTaskList(
      taskList.map((t)=>{
        if(t.id == task.id) return task;
        else  return t;
      })
    )
  }

  function handleFinish(id){
    console.log('handleFinish at app.js: ');
    
    console.log(id);
    
    setTaskList(
      taskList.map((t)=>{
        if(t.id == id){
          t.isDone = !t.isDone
        }
        return t;
      })
    )
  }


  return (
    <>
      <h1>TodoList</h1>
      <AddTask onAddTask={handleAdd}></AddTask>
      <TaskList onFinishTask={handleFinish} onChangeTask={handleChange} onDeleteTask={handleDelete} taskList={taskList}></TaskList>
    </>
  )
}

let nextId = 4;
const ini_taskList = [
  {
    id:1,
    todo:'workout',
    isDone:false
  },
  {
    id:2,
    todo:'reading',
    isDone:false
  },
  {
    id:3,
    todo:'grocery',
    isDone:false
  }
]

export default App;
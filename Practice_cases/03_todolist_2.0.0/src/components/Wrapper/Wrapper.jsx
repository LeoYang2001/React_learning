import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import Footer from '../Footer/Footer'
import { useState } from 'react'

const todoList_init = [
    {
        id:1,
        todo:'Workout',
        isDone:false
    },
    {
        id:2,
        todo:'Reading',
        isDone:false
    },
    {
        id:3,
        todo:'Groceries',
        isDone:false
    },
]


export default function Wrapper(){
  
    const [todoList, setTodoList] = useState(todoList_init)
    const [nextId, setNextId] = useState(4);

    function handleAddTodo(todo){
        const todoObj = {
            id:nextId,
            todo,
            isDone:false
        }
        setTodoList([...todoList,todoObj])
        setNextId(nextId+1);
    }

    function handleDeleteTodo(id){
        setTodoList(
            todoList.filter((todo)=>todo.id != id)
        )
    }

    function handleClearAll(){
        setTodoList([])
    }

    return (
        <>
        <h1>Todo App</h1>
            <AddTodo AddTodo = {handleAddTodo} ></AddTodo>
            <TodoList DeleteTodo = {handleDeleteTodo} todoList = {todoList}></TodoList>
            <Footer ClearAll = {handleClearAll} pendingNum = {todoList.length}></Footer>
        </>
    )
}
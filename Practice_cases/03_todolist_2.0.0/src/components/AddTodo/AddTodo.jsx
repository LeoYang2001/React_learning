import React, { useState } from 'react'
import styles from './AddTodo.module.css'

const AddTodo = ({AddTodo}) => {

  const [todoText , setTodoText] = useState('')

  function handleClick(){
    if(todoText.trim() === '')
    {
      alert('Can not insert empty todo')
      return
    }
      AddTodo(todoText)
      setTodoText("")
  }
  function handleKeyPress(e){
    if(e.key === 'Enter') handleClick()
  }

  return (
    <div className={styles.inputBox}>
      <input  onKeyPress={ e => handleKeyPress(e)} placeholder='Add your new todo' className={styles.input} onChange={(e)=>{setTodoText(e.target.value)}} value={todoText}></input>
      <button className={styles.button} onClick={handleClick}>+</button>
    </div>
  )
}

export default AddTodo
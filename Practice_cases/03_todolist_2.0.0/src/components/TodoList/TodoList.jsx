import React, { useState, useEffect} from 'react'
import styles from './TodoList.module.css'


function Todo({todo, DeleteTodo}){

    const [isDelete, setIsDelete] = useState(false)
    const [showButton, setShowButton] = useState(false);

    function handleClick(id){
        DeleteTodo(id)
    }
    
    useEffect(() => {
        // Set a timeout to show the button after a slight delay
        if (isDelete) {
          const timer = setTimeout(() => {
            setShowButton(true);
          }, 200); // Adjust the delay time as needed (in milliseconds)
          return () => clearTimeout(timer);
        } else {
          setShowButton(false);
        }
      }, [isDelete]);

    return(
        <>
            <div onClick={()=>{setIsDelete(!isDelete)}} className={`${styles.todo} ${isDelete ? styles.showButton : ''}`}><span>{todo.todo}</span></div>
            {showButton && <button className={styles.button} style={{width: '40px'}} onClick={() => handleClick(todo.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
            </button>}
        </>
    )
}

const TodoList = ({todoList, DeleteTodo}) => {



   

  return (
    <>
        <ul className={styles.ul}>
            {
                todoList.map((todo)=>{
                    return (
                        <li key={todo.id}>
                            <Todo DeleteTodo={DeleteTodo} todo={todo}></Todo>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default TodoList
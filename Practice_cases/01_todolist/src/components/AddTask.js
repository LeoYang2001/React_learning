import { useState } from "react";

function AddTask({onAddTask}){

    const [text, setText] = useState('');

    return (
        <>
            <input onChange={(e) => setText(e.target.value)} value={text} placeholder="Add your new task..."></input>
            <button onClick={()=>{
                onAddTask(text);
                setText('');
            }}>Add</button>
        </>
    )
}

export default AddTask;
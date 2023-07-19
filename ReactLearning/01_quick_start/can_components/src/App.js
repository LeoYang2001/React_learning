import { useState } from 'react';




function MyButton(){

  const [lightOn, setLightOn] = useState(true)

  function handleClick(){
    setLightOn(!lightOn)
  }

  return (
    

    <>
    <h1>light { lightOn ? 'On' : 'Off' }</h1>
        <button onClick={handleClick}> 
         Toggle
        </button>
    </>
  )
}



function App(){
  return (
    <>
    <MyButton></MyButton>
    </>
  )
}


export default App;
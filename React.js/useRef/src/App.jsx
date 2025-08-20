import React from 'react'
import { useState,useRef } from 'react'

const App = () => {
  let [count,setCount]= useState(0);
  
  let ref = useRef(0);
  const refe2 = useRef();
  refe2.current.style.color = 'blue';
  //dom manipulation using useRef

  const refer3 = useRef();
  refer3.current.style.backgroundColor = "purple";


  let inc = ()=>{
    setCount(count+1);
    ref.current = ref.current+1;
    console.log(ref.current)

  
  }
  return (
    
    <div>
      <button onClick={inc} ref={refer3}>
        Count is {count}
      </button>
      <p ref={refe2}>Changing the color using ref</p>
    </div>
  )
}

export default App
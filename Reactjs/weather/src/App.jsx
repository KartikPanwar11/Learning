import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  // console.log('weather API has been called')
  const [count,setCount] = useState(0);
  let handleInc = ()=>{
    setCount(count+1);
  }
  let handleDec = ()=>{
    setCount(count-1);
  }

  useEffect(()=>{
    if(count === 1){
      console.log('Comp did mount')
    }
    return()=>{
      if(count>1){
        console.log('Comp did unmount')
      }
    }
  },[count])


  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleInc}>Inc</button>
      <br /><br />
      <button onClick={handleDec}>Dec</button>
    </div>
  )
}

export default App      
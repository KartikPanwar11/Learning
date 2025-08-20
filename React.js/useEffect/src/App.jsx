import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {

  let [count,setCount] = useState(0);
  let inc = ()=>{
    setCount(count+1)
  }
  let dec = ()=>{
    setCount(count-1)
  }

  useEffect(()=>{
    if(count===1){
      console.log('Component mounted')
    }return()=>{
      if(count>1){
        console.log('Component unmounted')
      }
    }
  },[count])

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  )
}

export default App
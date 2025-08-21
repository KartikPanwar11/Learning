import React from 'react'
import { useState,useCallback } from 'react'
import Child from './Child'

const App = () => {

  let[count,setCount]= useState(0);
  let [count1,setCount1]=useState(0);
  console.log('App calling')

  let inc = ()=>{
    setCount(count+1)
  }
  let inc1 = ()=>{
    setCount1(count1+1)
  }
  let value = useCallback(inc1,[]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Increase</button>
      <br />
      <br />
      <h1>{count1}</h1>
      <button onClick={inc1}>Increase 1</button>
      <br /><br />
      
      <Child count={count1} Incr1={value}/>
      

    </>
  )
}

export default App
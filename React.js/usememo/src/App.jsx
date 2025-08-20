import React from 'react'
import { useState, useMemo } from 'react'
import Child from './Child'


const App = () => {

  const [count,setCount] = useState(0)
   let inc = ()=>{
    setCount(count+1)
   }
   let dec=()=>{
    setCount(count-1)
   }

   let sum = ()=>{
    console.log('Sum called')
    let total = 0;
    for(let i=0;i<10000;i++){
      total += i
    }
    return total;
   }
   let res = useMemo(sum,[])

  return (
    <>
      <h1>{res}</h1>
      <h1>Count is {count}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>

      <div>
        <Child/>
      </div>

    </>
  )
}

export default App
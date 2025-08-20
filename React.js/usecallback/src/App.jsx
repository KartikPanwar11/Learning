import React from 'react'
import { useState } from 'react'
import Child from './Child'

const App = () => {

  let[count,setCount]= useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <button onClick={()=>setCount(count-1)}>Dec</button>

      <div>
        <Child  count={count}/>
      </div>

    </>
  )
}

export default App
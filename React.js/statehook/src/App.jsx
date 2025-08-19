import React from 'react'
import { useState } from 'react';

const App = () => {
  
    let [value,setValue] = useState(0)

    const inc = ()=>{
      setValue (value+1);
    }
    const dec = ()=>{
      setValue(value-1);
    }
  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </div>
  )
}

export default App
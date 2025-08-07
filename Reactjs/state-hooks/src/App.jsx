import React from 'react'
import {useState} from 'react'


const App = () => {
  let [value,setValue] = useState(0)

  const handleIncrease = ()=>{
    setValue(value + 1)
    // console.log(value)  //can be used or ignore CLG
  }
  const handleDecrease = ()=>{
    setValue(value - 1);
    // console.log(value)
  }

  return (
    <div>
      <h1>Count:{value}</h1>
      <button onClick={handleIncrease}>Increase</button><br /><br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App
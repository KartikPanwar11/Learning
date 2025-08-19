import React from 'react'
import { useState } from 'react'
import Child from './Child'

const App = () => {
  let [name,setName] = useState("")
  return (
    <div>
      <Child setName={setName} name={name}/>
      <h1>This is inside parent Name:{name}</h1>
    </div>
  )
}

export default App
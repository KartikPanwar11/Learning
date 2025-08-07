import React from 'react'
import Child from './Child'
import { useState } from 'react'

const App = () => {

  let [name,setName]= useState('')
  return (

    <div>
      <Child setName={setName} name={name}/>
      <h1>This is inside Parent Name: {name}</h1>
    </div>
  )
}

export default App
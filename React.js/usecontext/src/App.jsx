import React from 'react'
import Child from './Child'
import { createContext } from 'react'

export let postMan = createContext()

const App = () => {
  let data = {
    name: 'Kartik',
    age: 24
  }
  return (
    <postMan.Provider value={data}> 
      <><Child/></>
    </postMan.Provider>
    
  )
}

export default App
import React from 'react'
import { useContext } from 'react'
import { postMan } from './App'

const Child3 = () => {
    const data = useContext(postMan)
  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </div>
  )
}

export default Child3
import React from 'react'

const Child = (props) => {
    const change = (e)=>{
        props.setName(e.target.value)
    }
  return (
    <div>
        <input type="text" name="" id="" placeholder='Enter Name...' onChange={change} />
        <h1>Name:{props.name} </h1>
    </div>
  )
}

export default Child
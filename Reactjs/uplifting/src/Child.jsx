import React from 'react'

const Child = (props) => {
    let handleChange = (e)=>{
        props.setName(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder='Your name' onChange={handleChange}/>
        <h1>This is inside Child Name:{props.name}</h1>
    </div>
  )
}

export default Child
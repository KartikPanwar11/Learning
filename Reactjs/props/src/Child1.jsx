import React from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
  return (
    <div>
        <Child2 {props.fullName}/>
    </div>
  )
}

export default Child1
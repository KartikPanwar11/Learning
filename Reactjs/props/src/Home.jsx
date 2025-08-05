import React from 'react'
import Child1 from './Child1'

const Home = (props) => {
  return (
    <div>
        <Child1 propsfullName/>
        {/* <h1>Name : {props.fullName}</h1> */}
        {/* <h1>Age: {props.age}</h1>
        <h1>Address: {props.add}</h1>
        <h1>Phone Number: {props.num}</h1> */}
    </div>
  )
}

export default Home 
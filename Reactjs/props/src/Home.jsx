import React from 'react'
import Child1 from './Child1'

const Home = (props) => {
  return (
    <div>
        <Child1 fullName={props.fullName}/>
    </div>
  )
}

export default Home 
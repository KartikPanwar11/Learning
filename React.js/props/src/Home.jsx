import React from 'react';
import Child1 from './Child1';

const Home = (props) => {

  return (
    <div>
        <Child1 fullname={props.fullname}/>
    </div>
  )
}

export default Home 
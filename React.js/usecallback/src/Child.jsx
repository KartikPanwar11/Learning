import React from 'react'

const Child = (props) => {
    console.log('Child running')
  return (
    <div>
        Count is:{props.count}
    </div>
  )
}

export default Child
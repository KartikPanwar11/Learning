import React from 'react'

const Child = React.memo(() => {
    console.log('Child called')
  return (
    
    <div>Child</div>
  )
});

export default Child
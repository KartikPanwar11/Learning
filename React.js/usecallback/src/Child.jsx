import React,{memo} from 'react'

const Child = (props) => {
    console.log('Child rendered')
  return (
    <div>
        Count is:{props.count1}
    </div>
  )
}

export default memo(Child)
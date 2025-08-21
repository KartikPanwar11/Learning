import React from 'react'
import Custom from './Custom'

const App = () => {
  const data = Custom('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {data && data.map((item)=>{
        return(
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>)
        }
        )}
    </div>
  )
}

export default App
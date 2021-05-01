import React, { useState } from 'react'

const Hook = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    count < 10 ? setCount(count + 1) : console.log('Untill 10')
  }
  const decrement = () => {
    count > 0 ? setCount(count - 1) : console.log('Untill 0')
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>Hook count is: {count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Hook

import React, { useState } from 'react'

const Hook2 = () => {
  const [name, setName] = useState('FFF')

  return (
    <div>
      <button onClick={() => setName('CEO')}>CEO</button>
      <button onClick={() => setName('NEO')}>NEO</button>
      <button onClick={() => setName('LEO')}>LEO</button>
      <h1>Hook name is: {name}</h1>
    </div>
  )
}

export default Hook2

import React, { useState, useEffect } from 'react'
import { Container, Item } from './TableStyle'

export default () => {
  const [state, setState] = useState([])

  useEffect(() => {
    Reset()
  }, [])

  const Reset = () => {
    setState([])
    for (let i = 1; i <= 100; i++) {
      setState((prev) => {
        return [...prev, i]
      })
    }
  }
  const onClick = (value) => {
    let newData = []
    state.map((e) => {
      e % value === 0
        ? (newData = [...newData, '*'])
        : (newData = [...newData, e])
    })
    setState(newData)
  }
  return (
    <Container>
      {state.map((value, index) => {
        return (
          <Item
            bcl={typeof value !== 'number'}
            onClick={() => {
              onClick(value)
            }}
          >
            {value}
          </Item>
        )
      })}
      <button onClick={Reset}>RESET</button>
    </Container>
  )
}

import React, { useState } from 'react'

export const MovieContext = React.createContext()
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { id: 1, name: 'DDDDDD', year: '1990' },
    { id: 2, name: 'AAAAAA', year: '1994' },
    { id: 3, name: 'BBBBBB', year: '1996' },
    { id: 4, name: 'CCCCCC', year: '1993' },
    { id: 5, name: 'FFFFFF', year: '1999' },
    { id: 6, name: 'ZZZZZZ', year: '1998' },
    { id: 7, name: 'KKKKKK', year: '1997' },
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}

import React, { useState } from 'react'

export const MovieContext = React.createContext()
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { id: 1, name: 'Titanic', year: '1990' },
    { id: 2, name: 'Bahor', year: '1994' },
    { id: 3, name: 'Rim', year: '1996' },
    { id: 4, name: 'Taxi', year: '1993' },
    { id: 5, name: '007', year: '1999' },
    { id: 6, name: 'Avatar', year: '1998' },
    { id: 7, name: 'Avengers', year: '1997' },
  ])
  const [editItem, setEditItem] = useState(null)

  const onEdit = (id) => {
    let findId = movies.find((movie) => movie.id === id)
    // console.log(findId)
    setEditItem(findId)
  }
  // console.log('edit', editItem)
  const editTask = (name, year, id) => {
    const newTasks = movies.map((movie) =>
      movie.id === id ? { name, year, id } : movie
    )
    // console.log(newTasks)
    setMovies(newTasks)
    setEditItem(null)
  }
  return (
    <MovieContext.Provider
      value={{ movies, setMovies, onEdit, editTask, editItem }}
    >
      {props.children}
    </MovieContext.Provider>
  )
}

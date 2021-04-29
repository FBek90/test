import React, { useContext, useState, useEffect } from 'react'
import { Input, Button } from './AddMovieStyle'
import {
  MovieContainer,
  Span,
  BtnContainer,
  H1,
  SubContainer,
} from './MoviesStyle'
import { MovieContext } from './Context'

export default () => {
  const { movies, setMovies, editItem, editTask } = useContext(MovieContext)
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  // console.log(editItem.name, editItem.year, editItem.id)

  // console.log(editItem.id)
  const addMovie = () => {
    // if (name !== '' && year.length >= 4) {
    if (editItem === null) {
      setMovies([...movies, { id: movies.length + 1, name, year }])
      setName('')
      setYear('')
    } else {
      // console.log(name, year, editItem.id)

      editTask(name, year, editItem.id)
    }
  }

  useEffect(() => {
    // console.log('editItem', editItem)
    if (editItem !== null) {
      setName(editItem.name)
      setYear(editItem.year)
    } else {
      setName('')
      setYear('')
    }
  }, [editItem])
  return (
    <div>
      <Input
        onChange={(e) => setName(e.target.value)}
        type='text'
        value={name}
        id=''
        placeholder='Add Movie Name'
      />
      <Input
        onChange={(e) => setYear(e.target.value)}
        type='number'
        value={year}
        id=''
        placeholder='Add Year'
      />
      <Button disabled={name === '' || year === ''} onClick={addMovie}>
        {editItem ? 'Edit Movie' : 'Add Movie'}
      </Button>
    </div>
  )
}

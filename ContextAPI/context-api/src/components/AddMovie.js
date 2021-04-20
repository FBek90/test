import React, { useContext, useState } from 'react'
import {
  MovieContainer,
  Span,
  BtnContainer,
  H1,
  SubContainer,
} from './MoviesStyle'
import { BsFillTrashFill } from 'react-icons/bs'
import { MovieContext } from './Context'

export default () => {
  const [movies, setMovies] = useContext(MovieContext)
  const [name, setName] = useState('')
  const [year, setYear] = useState('')

  const addMovie = () => {
    if (name !== '' && year.length >= 4) {
      setMovies([...movies, { id: movies.length + 1, name, year }])
      setName('')
      setYear('')
    } else if (year.length < 4 && year.length !== 0) {
      alert('Movie did not produced this year')
    } else {
      alert('Please input movie and year')
    }
  }
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type='text'
        value={name}
        id=''
        placeholder='Add Movie Name'
      />
      <input
        onChange={(e) => setYear(e.target.value)}
        type='number'
        value={year}
        id=''
        placeholder='Add Year'
      />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  )
}

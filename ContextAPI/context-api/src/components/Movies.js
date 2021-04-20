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

  const onDelete = (id) => {
    let newMovies = movies.filter((movie) => movie.id !== id)
    setMovies(newMovies)
  }
  return (
    <div>
      {movies.map((value) => {
        return (
          <MovieContainer key={value.id}>
            <H1>
              {value.name}
              <Span className='year'>{value.year}</Span>
              <BtnContainer>
                <BsFillTrashFill
                  onClick={() => onDelete(value.id)}
                ></BsFillTrashFill>
              </BtnContainer>
            </H1>
          </MovieContainer>
        )
      })}
    </div>
  )
}

import React, { useContext } from 'react'

import { BsFillTrashFill } from 'react-icons/bs'
import { MovieContext } from './Context'
import { Container, NavItems } from './NavbarStyle'

export default () => {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <Container>
      <NavItems>About</NavItems>
      <NavItems>Home</NavItems>
      <NavItems>Movie {movies.length}</NavItems>
    </Container>
  )
}

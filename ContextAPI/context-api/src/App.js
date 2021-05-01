import './AppStyle.js'
import { Container } from './AppStyle.js'
import AddMovie from './components/AddMovie.js'
import Movies from './components/Movies.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <Container>
      <Navbar />
      <AddMovie />
      <Movies />
    </Container>
  )
}

export default App

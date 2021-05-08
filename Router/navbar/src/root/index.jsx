import React from 'react'
import Navbar from '../components/Navbar'
import { Conatainer } from './style'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import SignIn from '../components/SignIn'
import Courses from '../components/Courses'

function App() {
  return (
    <Conatainer>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'>
            <Redirect exact to='/home' />
          </Route>
        </Switch>
        {/* home */}
        <Route path='/home'>
          <Home />
        </Route>
        {/* About */}
        <Route path='/about'>
          <About />
        </Route>
        {/* Courses */}
        <Route path='/courses'>
          <Courses />
        </Route>
        {/* Contacts */}
        <Route path='/contacts'>
          <Contacts />
        </Route>
        {/* SignIn */}
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Router>
    </Conatainer>
  )
}

export default App

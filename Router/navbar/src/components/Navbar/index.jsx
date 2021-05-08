import React from 'react'
import {
  Conatainer,
  StyleRouter,
  NavItem,
  ItemWrapper,
  activeStyle,
} from './style'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Conatainer>
      {/* <Router> */}
      <StyleRouter>
        <ItemWrapper>
          <NavItem activeStyle={activeStyle} to='/home'>
            Academy{' '}
          </NavItem>
        </ItemWrapper>
        <ItemWrapper>
          <NavItem activeStyle={activeStyle} to='/about'>
            About
          </NavItem>
          <NavItem activeStyle={activeStyle} to='/courses'>
            Courses
          </NavItem>
          <NavItem activeStyle={activeStyle} to='/contacts'>
            Contact
          </NavItem>
        </ItemWrapper>
        <ItemWrapper signin>
          <NavItem activeStyle={activeStyle} to='/signin'>
            Sign In
          </NavItem>
        </ItemWrapper>
      </StyleRouter>
      {/* </Router> */}
    </Conatainer>
  )
}

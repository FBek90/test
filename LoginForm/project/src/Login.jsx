import React from 'react'
import {
  Wrapper,
  Description,
  Titile,
  Input,
  Inputwrapper,
  UserIcon,
  PassIcon,
  Button,
  Info,
  Checkbox,
  Span,
  Forgot,
} from './style'

export default function Login() {
  return (
    <Wrapper>
      <Description>
        Already have an account?
        <Titile>Log in Here </Titile>
      </Description>
      <Inputwrapper>
        <UserIcon />
        <Input type='text' placeholder='Username'></Input>
      </Inputwrapper>
      <Inputwrapper>
        <PassIcon />
        <Input type='password' placeholder='Password'></Input>
      </Inputwrapper>
      <Info>
        <Span>
          <Checkbox type='checkbox' /> Keep me loged in
        </Span>
        <Button select>Log in</Button>
      </Info>
      <Forgot>Forgot your password?</Forgot>
    </Wrapper>
  )
}

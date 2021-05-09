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
} from './style'

export default function Register() {
  return (
    <Wrapper>
      <Description>
        Don`t have an account
        <Titile>Register now</Titile>
      </Description>
      <Inputwrapper>
        <UserIcon />
        <Input type='text' placeholder='Username'></Input>
      </Inputwrapper>
      <Inputwrapper>
        <PassIcon />
        <Input type='password' placeholder='Password'></Input>
      </Inputwrapper>
      <Inputwrapper>
        <PassIcon />
        <Input type='password' placeholder='Confirm password'></Input>
      </Inputwrapper>
      <Button>Sign up</Button>
    </Wrapper>
  )
}

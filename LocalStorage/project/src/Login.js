import React, { useState } from 'react'
import {
  Container,
  UnderContainer,
  Input,
  Eye,
  CheckInput,
  InputLabel,
  Email,
  Button,
  InputContainer,
  BtnContainer,
  Footer,
} from './LoginStyle'

export default () => {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const HandleEmail = (e) => {
    setName(e.target.value)
  }
  const HandlePassword = (e) => {
    setPassword(e.target.value)
  }
  const setDataToLS = (e) => {
    if (e.target.checked) {
      // if (name.length > 0 && password.length > 0) {
      //   localStorage.setItem('name', name)
      //   localStorage.setItem('password', password)
      // } else {
      //   alert('Please input your email and password')
      // }
      localStorage.setItem('name', name)
      localStorage.setItem('password', password)
    } else {
      localStorage.removeItem('name')
      localStorage.removeItem('password')
      setName('')
      setPassword('')
    }
  }
  return (
    <Container>
      <h1>Welcome Back</h1>
      <h3>We missed you! Login to get Started</h3>
      <UnderContainer>
        <h1>LOGIN</h1>
        <InputContainer>
          <Input
            type='email'
            placeholder='Your Email'
            onChange={HandleEmail}
            value={name}
          />
          <Email></Email>
          <Input
            type='password'
            placeholder='Password'
            onChange={HandlePassword}
            value={password}
          />
          <Eye></Eye>
          <InputLabel for='rem'>
            <CheckInput
              type='checkbox'
              id='rem'
              name='rem'
              onClick={setDataToLS}
            />
            Remember me
          </InputLabel>
          <BtnContainer>
            <h2>Need help?</h2>
            <Button>Sign In</Button>
          </BtnContainer>
        </InputContainer>
        <Footer>
          <h4>Don`t have an account? Register insted!</h4>
        </Footer>
      </UnderContainer>
    </Container>
  )
}

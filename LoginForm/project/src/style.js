import styled from 'styled-components'
import { ReactComponent as User } from './icon/user.svg'
import { ReactComponent as Password } from './icon/password.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
  color: white;
`
export const Wrapper = styled.div`
  width: 450px;
  height: fit-content;
  border: 2px solid #445859;
  margin: 12px;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`
export const Description = styled.div`
  color: white;
  font-weight: 600;
  font-size: 20px;
  /* margin-top: 20px; */
`
export const Titile = styled.div`
  color: #e7c961;
  font-size: 35px;
  text-align: center;
`
export const Inputwrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 25px;
  border-radius: 4px;
  margin-top: 20px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  outline: none;
  padding-left: 60px;
  color: white;
`
export const UserIcon = styled(User)`
  width: 28px;
  /* color: white; */
  top: 45%;
  left: 15px;
  position: absolute;
  fill: white;
`
export const PassIcon = styled(Password)`
  width: 30px;
  /* color: white; */
  top: 45%;
  left: 15px;
  position: absolute;
  fill: white;
`
export const Button = styled.button`
  width: 123px;
  height: 45px;
  background: #00988d;
  color: white;
  font-weight: 700;
  font-size: 22px;
  margin-top: ${(props) => (props.select ? '0px' : '15px')};
  margin-left: auto;
  border: 0;
  outline: none;
  border-radius: 5px;
`
export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`
export const Checkbox = styled.input`
  width: 50px;
  height: 50px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  margin-right: 10px;
`
export const Span = styled.span`
  display: flex;
  width: 130px;
  font-size: 20px;
`
export const Forgot = styled.div`
  margin-left: auto;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  font-weight: 400;
`

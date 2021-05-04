import styled from 'styled-components'
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai'

export const Container = styled.div`
  width: 500px;

  height: 900px;
  background-color: #3c99dc;
  margin: 50px auto;
  position: relative;
  box-shadow: 0 0 5px #999;
  h1 {
    color: white;
    position: absolute;
    top: 40px;
    left: 20px;
    font-size: 45px;
  }
  h3 {
    color: white;
    position: absolute;
    top: 90px;
    left: 23px;
    font-size: 25px;
  }
`
export const UnderContainer = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  bottom: 0;
  h1 {
    color: grey;
    position: absolute;
    top: 30px;
    left: 200px;
    font-size: 35px;
    margin: 0 auto;
  }
`

export const InputContainer = styled.div`
  width: 80%;
  height: 340px;
  display: flex;
  flex-direction: column;
  /* background-color: green; */
  position: relative;

  /* position: relative; */
  /* top: 150px; */
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`

export const Input = styled.input`
  width: 100%;
  /* top: 150px; */
  font-size: 25px;
  color: #666;
  display: block;
  background: #e6e6e6;
  height: 60px;
  border-radius: 25px;
  outline: none;
  border: none;
  margin-top: 20px;
`
export const Eye = styled(AiFillEyeInvisible)`
  color: grey;
  font-size: 35px;
  position: absolute;
  right: 10px;
  top: 115px;
`
export const Email = styled(AiOutlineMail)`
  color: grey;
  font-size: 35px;
  position: absolute;
  right: 10px;
  top: 30px;
`

export const CheckInput = styled.input`
  width: 35px;
  /* top: 150px; */
  background: #e6e6e6;
  height: 20px;
  margin-top: 20px;
  margin-left: 20px;
`
export const InputLabel = styled.label`
  font-size: 25px;
  color: #3c99dc;
`
export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  font-size: 25px;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 25px;
    color: #3c99dc;
  }
`
export const Button = styled.button`
  color: #fff;
  width: 40%;
  /* top: 150px; */
  font-size: 25px;
  background: #3c99dc;
  height: 60px;
  border-radius: 25px;
  outline: none;
  border: none;

  cursor: pointer;
  :hover {
    background: green;
    color: red;
  }
`
export const Footer = styled.div`
  font-size: 25px;
  color: #3c99dc;
  margin: 0 auto;
  margin-top: 60px;
  background-color: yellov;
`

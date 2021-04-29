import styled from 'styled-components'
export const Input = styled.input`
  width: 300px;
  height: 35px;
  margin-top: 30px;
  margin-right: 10px;
  font-size: 20px;
  color: white;
  font-style: bold;
  background-color: coral;
  border: 1px solid #444;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
`

export const Button = styled.button`
  text-align: center;
  background: linear-gradient(100deg, rgb(182, 40, 111) 50%, #ac2066 0);
  color: white;
  width: 130px;
  height: 40px;
  font-size: 20px;

  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  border: 1px solid #444;
  outline: none;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: coral;
    color: white;
  }
`

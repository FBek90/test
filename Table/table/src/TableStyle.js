import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 80px);
  grid-auto-rows: 80px;
  width: 800px;
  margin: 0 auto;
  /* background-color: green; */
`

export const Item = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${({ bcl }) => (bcl ? 'green' : 'coral')};
  color: white;
  margin: 1px;
  font-size: 30px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

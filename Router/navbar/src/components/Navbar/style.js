import styled from 'styled-components'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

export const Conatainer = styled.div`
  background-color: #24252a;
  padding: 20px 200px;
`

export const StyleRouter = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`

export const ItemWrapper = styled.div`
  flex: 1;
  text-align: ${({ signin }) => signin && 'end'};
`

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #b5b6bb;
  font-size: 32px;
  margin-right: 70px;
  /* justify-content: ${({ to }) => to === '/about' && 'center'}; */
`
export const activeStyle = {
  background: '#0089a6',
  padding: '8px 20px',
  borderRadius: '20px',
  color: 'white',
}

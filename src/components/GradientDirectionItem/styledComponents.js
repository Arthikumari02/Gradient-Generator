import styled from 'styled-components'

export const Button = styled.button`
  background-color: white;
  color: #1e293b;
  border-radius: 6px;
  padding: 10px;
  opacity: ${props => (props.isTabActive ? 1 : 0.5)};
`

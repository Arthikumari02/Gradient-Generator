import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    ${props => props.direction || 'top'},
    ${props => props.color1 || '#8ae323'},
    ${props => props.color2 || '#014f7b'}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: content;
  color: white;
  gap: 10px;
`

export const ColorInput = styled.form`
  width: 160px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Input = styled.input`
  width: 80px;
  height: 30px;
  border: none;
  outline: none;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: white;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

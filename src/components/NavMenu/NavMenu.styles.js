import styled from 'styled-components'
import { Button } from 'App.styles'

export const Content = styled.section`
  height: 136px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin-top: 80px;
  @media (width <= 800px) {
    display: none;
  }
`
export const Logo = styled.div`
  margin-right: 50px;
  cursor: pointer;
`

export const EnterButton = styled(Button)``

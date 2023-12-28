import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const InfoButton = styled(Button)`
  display: flex;
  flex-direction: column;
  padding: 0 37px;
  font-size: 14px;
  line-height: 140%;
  & span {
    font-size: 16px;
    font-weight: 600;
  }
  @media (width <= 600px) {
    width: 100%;
  }
`

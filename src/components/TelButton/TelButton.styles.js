import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const InfoButton = styled(Button)`
  display: flex;
  flex-direction: column;
  padding: 0 37px;
  font-size: 14px;
  line-height: 140%;
  //   margin-bottom: 34px;
  & span {
    font-size: 16px;
    font-weight: 600;
  }
`

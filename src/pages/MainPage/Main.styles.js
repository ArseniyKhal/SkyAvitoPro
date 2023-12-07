import { styled } from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const Title = styled.h1`
  color: var(--text-color-black);
  font-size: 40px;
  font-weight: 500;
  line-height: 220%;
`

export const MainList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(3, 360px);
  justify-content: space-between;
  row-gap: 44px;
  margin-bottom: 34px;
`

export const MainFooter = styled.div`
  display: flex;
  justify-content: center;
`
export const BlockError = styled.div`
  color: var(--orange-90);
  font-size: 30px;
`
export const MainButton = styled(ButtonPurple)`
  width: 147px;
  height: 48px;
  margin-bottom: 60px;
  border-radius: 46px;
  background: #c7e957;
  color: #000;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.1px;
  &:hover {
    background: #daf289;
  }
  & active {
    background: #ebffab;
  }
`

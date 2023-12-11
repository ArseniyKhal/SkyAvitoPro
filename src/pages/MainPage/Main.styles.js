import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const Title = styled.h1`
  color: var(--text-color-black);
  font-size: 40px;
  font-weight: 500;
  line-height: 220%;
`

export const MainList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(4, 270px);
  justify-content: space-between;
  row-gap: 40px;
  margin-bottom: 34px;
`

export const MainFooter = styled.div`
  display: flex;
  justify-content: center;
`
export const MainButton = styled(Button)`
  margin-bottom: 60px;
`
export const BlockError = styled.div`
  color: var(--orange-90);
  font-size: 30px;
`

import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const Title = styled.h1`
  color: var(--text-color-black);
  font-size: 40px;
  font-weight: 500;
  line-height: 220%;
  @media (width <= 800px) {
    margin: 20px 0;
    font-size: 24px;
    line-height: 120%;
    padding: 15px 15px 0 15px;
  }
`

export const MainList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(4, 270px);
  justify-content: space-between;
  row-gap: 40px;
  column-gap: 20px;
  margin-bottom: 34px;
  @media (width < 1200px) {
    grid-template: auto/ repeat(3, 1fr);
  }
  @media (width <= 800px) {
    grid-template: auto/ repeat(2, 1fr);
    padding: 0 15px;
  }
`

export const MainFooter = styled.section`
  display: flex;
  justify-content: center;
`
export const UpButton = styled(Button)`
  margin-bottom: 60px;
  @media (width <= 600px) {
    margin-bottom: 40px;
  }
`
export const BlockError = styled.div`
  color: var(--orange-90);
  font-size: 30px;
`

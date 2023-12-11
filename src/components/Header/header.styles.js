import styled from 'styled-components'
import { Button } from 'App.styles'

export const HeaderSection = styled.div`
  height: 80px;
  width: 100%;
  background-color: var(--main-topic);
  position: absolute;
  top: 0;
  left: 0px;
`
export const HeaderContainer = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100%;
`
export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;
`
export const EnterButton = styled(Button)`
  border: 1px solid var(--text-color-white);
  height: 40px;
  &:hover {
    background: var(--btn-hover-BG);
  }
`

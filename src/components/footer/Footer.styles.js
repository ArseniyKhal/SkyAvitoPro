import styled from 'styled-components'
import { Button } from 'App.styles'

export const Footer = styled.div`
  height: 54px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0px;
  @media (width > 800px) {
    display: none;
  }
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const FooterButton = styled.div`
  cursor: pointer;
`
export const FooterButtonCenter = styled(FooterButton)`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: 1px solid var(--main-topic);
  position: relative;
  display: inline-block;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 1px;
    transition: background-color 0.1s ease;
    background-color: var(--main-topic);
    top: 50%;
    left: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:after {
    transform: translate(-50%, -50%);
  }
`

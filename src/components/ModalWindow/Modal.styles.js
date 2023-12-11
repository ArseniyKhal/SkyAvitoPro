import styled from 'styled-components'

export const ModalDarckBG = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`
export const ModalWindow = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 366px;
  min-height: 440px;
  position: relative;
  padding: 45px;
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  &:hover:before,
  &:hover:after {
    box-shadow: 0px 0px 4px #d9d9d9;
  }
  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    top: -1px;
    left: -3px;
    transform: rotate(45deg);
    background-color: #d9d9d9;
    position: relative;
    z-index: 7;
  }
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    top: -20px;
    left: -3px;
    background-color: #d9d9d9;
    position: relative;
    transform: rotate(135deg);
    z-index: 7;
  }
`

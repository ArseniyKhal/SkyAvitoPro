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
  padding: 44px;
  max-width: 600px;
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    transition: background-color 0.1s ease;
    background-color: var(--btn-disabled);
    position: relative;
    z-index: 7;
  }
  &:before {
    top: -1px;
    left: -3px;
    transform: rotate(45deg);
  }
  &:after {
    top: -20px;
    left: -3px;
    transform: rotate(135deg);
  }
  &:hover:before,
  &:hover:after {
    background-color: var(--main-topic);
  }
`
export const ContentBlock = styled.div`
  padding-top: 30px;
  font-size: 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SuccessImg = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  margin-top: 10px;
`

import styled from 'styled-components'

export const ModalDarckBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  padding: 44px;
  max-width: 80vw;
  @media (width <= 800px) {
    max-width: 100vw;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: none;
    border-radius: 0;
    padding: 85px 15px 54px 15px;
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
export const ModalHeader = styled.div`
  @media (width > 800px) {
    display: none;
  }
`

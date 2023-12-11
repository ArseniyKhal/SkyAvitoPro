import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 45px;
  //   position: absolute;
  //   top: 30%;
  //   left: 50%;
  //   width: 366px;
  //   transform: translate(-50%, -50%);
  //   background-color: #ffffff;
  //   background-color: #f0f0f0;
  //   border-radius: 12px;

  //   margin-top: 20vh;
  //   --modal-width: 366px;
  //   --modal-height: 439px;
  //   left: calc(50% - (var(--modal-width) / 2));
  //   top: calc(50% - (var(--modal-height) / 2));
  //   box-sizing: border-box;
  //   width: var(--modal-width);
  //   min-height: var(--modal-height);
`
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 38px;
  background-color: transparent;
`

export const LogoText = styled.p`
  color: #000;
  font-size: 30px;
  font-weight: 600;
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
`

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  fill: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid #d0cece;
  padding: 8px 8px;
  font-size: 22px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`

export const PrimaryButton = styled(Button)`
  font-size: 18px;
  height: 52px;
  width: 100%;
`

export const SecondaryButton = styled(Button)`
  font-size: 18px;
  height: 52px;
  width: 100%;
  border: 1px solid #d9d9d9;
  color: var(--text-color-black);
  background-color: transparent;
  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }
`
export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`

// export const TitleBlock = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: -40px;
//   margin-bottom: 52px;
// `
// export const TitleBlockContent = styled.div`
//   width: 830px;
// `
// export const TitleBlockTitle = styled.h3`
//   color: var(--monochrome-white-20);
//   font-size: 20px;
//   font-weight: 400;
//   line-height: 115%;
//   letter-spacing: -0.05px;
//   opacity: 0.5;
//   margin-bottom: 17px;
// `
// export const TitleBlockSlogan = styled.h1`
//   color: #f4f4ff;
//   font-size: 60px;
//   line-height: 91.5%;
//   letter-spacing: -1.169px;
// `
// export const SaleSticker = styled.div`
//   position: relative;
//   width: 212.27px;
//   height: 151.741px;
//   transform: rotate(15.957deg);
//   top: 23px;
//   right: -50px;
// `

// export const SaleStickerText = styled.p`
//   position: absolute;
//   color: #ff8071;
//   text-align: center;
//   font-size: 20px;
//   line-height: 90%;
//   letter-spacing: -0.15px;
//   left: 18%;
//   top: 38%;
// `
// export const MainList = styled.ul`
//   display: grid;
//   grid-template: auto/ repeat(3, 360px);
//   justify-content: space-between;
//   row-gap: 44px;
//   margin-bottom: 34px;
// `
// export const MainFooter = styled.div`
//   display: flex;
//   justify-content: center;
// `
// export const BlockError = styled.div`
//   color: var(--orange-90);
//   font-size: 30px;
// `

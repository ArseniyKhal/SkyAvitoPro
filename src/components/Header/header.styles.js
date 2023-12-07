import styled from 'styled-components'
import { Button } from 'App.styles'

export const HeaderFirstLine = styled.div`
  height: 80px;
  width: 100%;
  background-color: var(--main-topic);
`
export const HeaderSecondLine = styled.div`
  height: 136px;
  width: 100%;
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
export const HeaderLogo = styled.div`
  margin-right: 50px;
`
export const SearchText = styled.input`
  flex-shrink: 0;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 0px 19px;
  flex-grow: 1;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-color-black);
  outline: none;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-input-placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &::placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-color-input);
  }
`
export const EnterButton = styled(Button)``
export const EnterButtonSecondLine = styled(Button)`
  border: 1px solid var(--text-color-white);
  height: 40px;
  &:hover {
    background: var(--btn-hover-BG);
  }
`

// export const HeaderLogoText = styled.p`
//   color: #000;
//   font-size: 30px;
//   font-weight: 600;
// `
// export const HeaderFlex = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   position: relative;
// `
// export const HeaderUserLogo = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   overflow: hidden;
//   background-color: rgb(165, 163, 163);
// `
// export const HeaderUserImg = styled.img`
//   width: 50px;
//   height: 50px;
// `
// export const HeaderName = styled.p`
//   margin-left: 15px;
//   font-size: 24px;
//   margin-right: 12px;
// `
// export const HeaderButton = styled.div`
//   position: relative;
// `
// export const EnterButton = styled(ButtonPurple)`
//   width: 77px;
//   height: 36px;
//   font-size: 16px;
//   background: #140d40;
//   &:hover {
//     background: #2d1f79;
//   }
//   &:active {
//     background: #3b29a1;
//   }
// `
// export const Dropdown = styled.nav`
//   position: absolute;
//   top: 0px;
//   right: 0px;
// `
// export const DropdownMenu = styled.ul`
//   position: relative;
//   padding: 0 30px 20px;
//   text-align: end;
//   width: 200px;
//   right: -30px;
//   top: 55px;
//   z-index: 3;
//   opacity: 0;
//   visibility: hidden;
//   transform: translateY(-40px);
//   transition: 0.5s;
//   font-size: 20px;
//   backdrop-filter: blur(3px);
//   border-radius: 15px;

//   ${(props) =>
//     props.open &&
//     `
// 	   opacity: 1;
//       visibility: visible;
//       transform: translateY(0px);
//     `};
// `
// export const DropdownMenuItem = styled.li`
//   padding-bottom: 10px;
//   &:hover {
//     text-decoration: underline;
//   }
// `

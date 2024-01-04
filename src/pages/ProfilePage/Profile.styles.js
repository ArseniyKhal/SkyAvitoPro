import { styled } from 'styled-components'
import { Button } from '../../App.styles'

export const Title = styled.h1`
  color: var(--text-color-black);
  font-size: 40px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;
  @media (width <= 800px) {
    margin: 85px 0 20px 0;
    font-size: 24px;
    line-height: 120%;
    padding: 0 15px;
  }
`
export const ProfileSettings = styled.div`
  margin-bottom: 50px;
  @media (width <= 800px) {
    margin-bottom: 40px;
    padding: 0 15px;
  }
`
export const SubTitle = styled.h3`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 20px;
  @media (width <= 800px) {
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 30px;
  }
`
export const ProfileSettingsContent = styled.div`
  //   display: flex;
  display: grid;
  grid-template-columns: 170px 1fr;
  column-gap: 50px;
  row-gap: 20px;
  @media (width <= 800px) {
    //  flex-direction: column;
    grid-template-columns: 1fr;
    gap: 30px;
  }
`
export const BlockAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  grid-row-start: span 2;
  @media (width <= 800px) {
    grid-row-start: span 1;
  }
`
export const AvatarPicture = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
  @media (width <= 800px) {
    width: 132px;
    height: 132px;
  }
`
export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const AvatarСhangeBtn = styled.div`
  color: var(--main-topic);
  line-height: 150%;
  cursor: pointer;
`

export const BlockSettings = styled.form`
  display: flex;
  width: 614px;
  flex-wrap: wrap;
  row-gap: 48px;
  padding-top: 21px;
  justify-content: space-between;
  @media (width <= 800px) {
    width: 100%;
  }
`
export const InputsBlock = styled.div`
  position: relative;
  width: 300px;
  @media (width <= 800px) {
    width: 100%;
  }
`
export const InputsBlockTel = styled(InputsBlock)`
  width: 100%;
`
export const Label = styled.label`
  color: #c4c4c4;
  font-weight: 500;
  line-height: 150%;
  position: relative;
  display: inline-block;
  left: 0;
  top: -40px;
  width: 0px;
  @media (width <= 800px) {
    font-size: 14px;
    left: 20px;
  }
`
export const ProfileSettingsInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: inherit;
  padding: 0px 19px;
  outline: none;
  font-size: 16px;
  fill: none;
  &:focus {
    box-shadow: 0px 0px 5px var(--main-topic);
    border: 1px solid var(--main-topic);
  }
  &::placeholder {
    color: var(--text-color-black);
    font-size: 16px;
    line-height: 150%;
  }
  @media (width <= 800px) {
    border-radius: 30px;
    border: 1px solid var(--main-topic);
    &::placeholder {
      font-size: 14px;
    }
  }
`
export const EnterButton = styled(Button)`
  padding: 0 37px;
  @media (width <= 800px) {
    width: 100%;
  }
`

export const UsersProducts = styled.div`
  @media (width <= 800px) {
    padding: 0 15px;
  }
`
export const ProductsList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(4, 270px);
  justify-content: space-between;
  row-gap: 40px;
  column-gap: 26px;
  margin-bottom: 34px;
  @media (width < 1200px) {
    grid-template: auto/ repeat(3, 1fr);
  }
  @media (width <= 800px) {
    grid-template: auto/ repeat(2, 1fr);
  }
`

export const Inputs = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
  @media (width <= 800px) {
    gap: 14px;
  }
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
  @media (width <= 800px) {
    border-radius: 30px;
    border: 1px solid #d9d9d9;
    padding: 8px 17px;
  }
`
export const ChangePasBtn = styled(EnterButton)`
  width: 200px;
  @media (width <= 800px) {
    width: 100%;
  }
`
export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
  width: 100%;
`

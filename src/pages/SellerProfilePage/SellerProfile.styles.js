import { styled } from 'styled-components'
import { Button } from '../../App.styles'

export const Title = styled.h1`
  color: var(--text-color-black);
  font-size: 40px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;
`
export const ProfileSettings = styled.div`
  margin-bottom: 70px;
`
export const SubTitle = styled.h3`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 20px;
`
export const ProfileSettingsContent = styled.div`
  display: flex;
  gap: 50px;
`
export const BlockAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const AvatarPicture = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
`
export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BlockSettings = styled.div`
  //   margin-bottom: 30px;
  display: flex;
  width: 614px;
  flex-wrap: wrap;
  row-gap: 48px;
  padding-top: 21px;
  justify-content: space-between;
`
export const InputsBlock = styled.div`
  position: relative;
  width: 300px;
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
  top: -40px;
  width: 0px;
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
  //   &::placeholder {
  //     font-size: 16px;
  //     line-height: 24px;
  //     color: #d0cece;
  //   }
`
export const EnterButton = styled(Button)`
  padding: 0 37px;
  margin-top: -20px;
`

export const UsersProducts = styled.div``
export const MainList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(4, 270px);
  justify-content: space-between;
  row-gap: 40px;
  margin-bottom: 34px;
`

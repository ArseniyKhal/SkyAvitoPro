import { styled } from 'styled-components'

export const Title = styled.h1`
  color: var(--text-color-black);
  font-size: 40px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;
`
export const SubTitle = styled.h3`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 20px;
`
export const ProfileSettings = styled.div`
  margin-bottom: 70px;
`
export const ProfileSettingsContent = styled.div`
  display: flex;
  gap: 50px;
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
export const BlockInfo = styled.div``
export const InfoText = styled.div`
  margin-bottom: 30px;
`

export const SellerName = styled.p`
  color: var(--text-color-black);
  font-size: 20px;
  font-weight: 600;
  line-height: 200%;
`
export const SellerLocation = styled.p`
  color: var(--text-color-grey);
  line-height: 200%;
`
export const SellerProducts = styled.div``
export const MainList = styled.ul`
  display: grid;
  grid-template: auto/ repeat(4, 270px);
  justify-content: space-between;
  row-gap: 40px;
  margin-bottom: 34px;
`

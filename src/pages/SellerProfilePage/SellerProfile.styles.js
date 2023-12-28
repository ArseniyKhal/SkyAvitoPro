import { styled } from 'styled-components'

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
    text-align: center;
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
export const ProfileSettings = styled.div`
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 170px 1fr;
  column-gap: 50px;
  row-gap: 30px;
  @media (width <= 600px) {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
`
export const AvatarPicture = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
  order: 1;
  grid-row-start: span 2;
  @media (width <= 600px) {
    grid-row-start: span 1;
    order: 2;
    width: 132px;
    height: 132px;
    margin: 0 auto;
  }
`
export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const BlockInfo = styled.div`
  order: 2;
  @media (width <= 600px) {
    grid-row-start: span 1;
    order: 1;
  }
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
export const Phone = styled.div`
  order: 3;
`
export const SellerProducts = styled.div`
  @media (width <= 800px) {
    padding: 0 15px;
  }
`

export const MainList = styled.ul`
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

import { styled } from 'styled-components'
import { Button } from 'App.styles'

export const AdvContent = styled.div`
  padding-top: 30px;
  display: grid;
  gap: 60px;
  grid-template-columns: minmax(320px, 480px) 1fr;
`
export const BlockPicture = styled.div`
  width: 480px;
  overflow: hidden;
`
export const Picture = styled.div`
  width: 100%;
  height: 480px;
  background-color: #f0f0f0;
  margin-bottom: 30px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const PictureCarousel = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`
export const SmallPicture = styled.div`
  width: 88px;
  height: 88px;
  background-color: #f0f0f0;
`
export const BlockInfo = styled.div``
export const InfoTitle = styled.h2`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  max-width: 480px;
  margin-bottom: 10px;
`
export const BlockText = styled.div`
  grid-column: span 2;
`
export const TextTitle = styled.h3`
  color: var(--text-color-black);
  font-size: 32px;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 20px;
`
export const InfoData = styled.p`
  color: var(--text-color-grey);
  line-height: 130%;
  margin-bottom: 4px;
`
export const InfoLocation = styled.p`
  color: var(--text-color-grey);
  line-height: 130%;
  margin-bottom: 4px;
`
export const InfoReviews = styled.p`
  color: var(--main-topic);
  line-height: 130%;
  cursor: pointer;
  margin-bottom: 34px;
`
export const InfoPrice = styled.p`
  color: var(--text-color-black);
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 20px;
`
export const SalesmanBlock = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 12px;
`
export const SalesmanLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
`
export const SalesmanName = styled.p`
  color: var(--main-topic);
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  cursor: pointer;
`
export const SalesmanInfo = styled.p`
  color: var(--text-color-grey);
  line-height: 200%;
`

export const TextParagraph = styled.p`
  color: var(--text-color-black);
  line-height: 150%;
  max-width: 800px;
`

export const EnterButton = styled(Button)`
  padding: 0 37px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

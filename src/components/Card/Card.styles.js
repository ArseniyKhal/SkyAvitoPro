import { styled } from 'styled-components'

export const Card = styled.li`
  //   width: 270px;
  //   height: 440px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
`
export const CardPicture = styled.div`
  height: 270px;
  background-color: #f0f0f0;
`
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const CardContent = styled.div`
  margin-top: 20px;
`
export const CardLink = styled.p`
  color: var(--main-topic);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 22px;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #ff6163;
  }
`
export const CardPrice = styled.p`
  color: var(--text-color-black);
  font-size: 22px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 10px;
`
export const CardBlock = styled.div`
  color: var(--text-color-grey);
  line-height: 130%;
`
export const CardLocation = styled.p`
  margin-bottom: 4px;
`
export const CardData = styled.p``

export const RedirectButton = styled.span`
  border-radius: 80px;
  background: #c7e957;
  color: #000;
  font-size: 20px;
  padding: 10px 17px;
  position: absolute;
  left: 30px;
  bottom: 27px;
  cursor: pointer;
  &:hover {
    background: #daf289;
  }
  & active {
    background: #ebffab;
  }
  z-index: 3;
`

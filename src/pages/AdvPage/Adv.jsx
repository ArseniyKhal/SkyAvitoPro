import { useState } from 'react'
import { Header } from 'components/Header/header'
import * as S from './Adv.styles'

export const Adv = () => {
  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  return (
    <>
      <Header></Header>
      <S.AdvContent>
        <S.BlockPicture>
          <S.Picture></S.Picture>
          <S.PictureCarousel>
            <S.SmallPicture></S.SmallPicture>
            <S.SmallPicture></S.SmallPicture>
            <S.SmallPicture></S.SmallPicture>
            <S.SmallPicture></S.SmallPicture>
            <S.SmallPicture></S.SmallPicture>
          </S.PictureCarousel>
        </S.BlockPicture>
        <S.BlockInfo>
          <S.InfoTitle>
            Ракетка для большого тенниса Triumph Pro STС Б/У
          </S.InfoTitle>
          <S.InfoData>Сегодня в 10:45</S.InfoData>
          <S.InfoLocation>Санкт Петербург</S.InfoLocation>
          <S.InfoReviews>23 отзыва</S.InfoReviews>
          <S.InfoPrice>2 200 ₽</S.InfoPrice>
          <S.InfoButton>
            <span>Показать телефон</span>8 905 ХХХ ХХ ХХ
          </S.InfoButton>
          <S.SalesmanBlock>
            <S.SalesmanLogo></S.SalesmanLogo>
            <div>
              <S.SalesmanName>Кирилл</S.SalesmanName>
              <S.SalesmanInfo>Продает товары с августа 2021</S.SalesmanInfo>
            </div>
          </S.SalesmanBlock>
        </S.BlockInfo>
        <S.BlockText>
          <S.TextTitle>Описание товара</S.TextTitle>
          <S.TextParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.TextParagraph>
        </S.BlockText>
      </S.AdvContent>
    </>
  )
}

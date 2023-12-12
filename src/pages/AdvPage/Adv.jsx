import { useState } from 'react'
import { Header } from 'components/Header/header'
import { NavMenu } from 'components/NavMenu/NavMenu'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import { useParams } from 'react-router-dom'
import { formateDate, formateTel } from 'helpers/helpers'
import { Loader2 } from 'App.styles'
import * as S from './Adv.styles'

// переделать продает товары с ....
// сделать картинки кликабельными
// не сделаны отзывы

export const Adv = () => {
  const { advID } = useParams()
  const [isVisibliTelNum, setVisibliTelNum] = useState(false)
  const { data, error, isLoading } = useGetAllAdvsQuery()
  const adv = data?.filter((item) => {
    return item.id === +advID
  })[0]
  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  // картинки
  let bigImageAdv
  let mapImagesList
  if (adv) {
    bigImageAdv = adv.images[0]?.url

    // формируем список картинок
    mapImagesList = adv.images?.map((image) => {
      return (
        <S.SmallPicture key={image.id}>
          <S.Img
            src={
              bigImageAdv
                ? `http://localhost:8090/${image.url}`
                : '/img/noImage.jpg'
            }
            alt="fotoAvd"
          ></S.Img>
        </S.SmallPicture>
      )
    })
  }

  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>
      {isLoading ? (
        <Loader2></Loader2>
      ) : (
        <S.AdvContent>
          <S.BlockPicture>
            <S.Picture>
              <S.Img
                src={
                  bigImageAdv
                    ? `http://localhost:8090/${bigImageAdv}`
                    : '/img/noImage.jpg'
                }
                alt="fotoAvd"
              ></S.Img>
            </S.Picture>
            <S.PictureCarousel>{mapImagesList}</S.PictureCarousel>
          </S.BlockPicture>
          <S.BlockInfo>
            <S.InfoTitle>{adv.title}</S.InfoTitle>
            <S.InfoData>{formateDate(adv.created_on)}</S.InfoData>
            <S.InfoLocation>{adv.user.city}</S.InfoLocation>
            <S.InfoReviews>23 отзыва</S.InfoReviews>
            <S.InfoPrice>{adv.price.toLocaleString()} ₽</S.InfoPrice>
            <S.InfoButton onClick={() => setVisibliTelNum(true)}>
              <span>Показать телефон</span>
              {adv.user.phone
                ? `${
                    isVisibliTelNum
                      ? formateTel(adv.user.phone, isVisibliTelNum)
                      : formateTel(adv.user.phone, isVisibliTelNum)
                  }`
                : 'номер не указан'}
            </S.InfoButton>

            <S.SalesmanBlock>
              <S.SalesmanLogo>
                <S.Img
                  src={`http://localhost:8090/${adv.user.avatar}`}
                  alt="fotoAvd"
                ></S.Img>
              </S.SalesmanLogo>
              <div>
                <S.SalesmanName>{adv.user.name}</S.SalesmanName>
                <S.SalesmanInfo>
                  Продает товары {formateDate(adv.user?.sells_from)}
                </S.SalesmanInfo>
              </div>
            </S.SalesmanBlock>
          </S.BlockInfo>
          <S.BlockText>
            <S.TextTitle>Описание товара</S.TextTitle>
            <S.TextParagraph>{adv.description}</S.TextParagraph>
          </S.BlockText>
        </S.AdvContent>
      )}
    </>
  )
}

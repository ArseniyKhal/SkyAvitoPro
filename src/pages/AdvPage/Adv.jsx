import { useState } from 'react'
import { Header } from 'components/Header/header'
import { NavMenu } from 'components/NavMenu/NavMenu'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import { useParams } from 'react-router-dom'
import {
  formateDate,
  formateTelNumber,
  formateSecretTelNumber,
  formateTel,
} from 'helpers/helpers'
import { Loader2 } from 'App.styles'
import * as S from './Adv.styles'

export const Adv = () => {
  const { advID } = useParams()
  const [isVisibliTelNum, setVisibliTelNum] = useState(false)
  const { data, error, isLoading } = useGetAllAdvsQuery()
  const adv = data?.filter((item) => {
    return item.id === +advID
  })[0]
  //   console.log(adv)
  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  // картинки
  let bigImageAdv
  let mapImagesList
  //   const image = data.images[0]?.url
  if (adv) {
    bigImageAdv = adv.images[0]?.url

    // формируем список картинок
    mapImagesList = adv.images?.map((image) => {
      return (
        <S.SmallPicture key={image.id}>
          <S.CardImg
            src={
              bigImageAdv
                ? `http://localhost:8090/${image.url}`
                : '/img/noImage.jpg'
            }
            alt="fotoAvd"
          ></S.CardImg>
        </S.SmallPicture>
      )
    })
  }

  //   console.log(formateTelNumber(adv?.user.phone))
  //   let phoneSeler
  //   if (!isLoading) {
  //     phoneSeler = adv.user?.phone?.replace(
  //       /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
  //       '$1 $2 $3 $4 $5',
  //     )
  //   }
  //   const tel = adv.user.phone?.split('').splice(0, 4).join('')
  //   //   console.log(`${tel}XXXXXXX`)
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
              <S.CardImg
                src={
                  bigImageAdv
                    ? `http://localhost:8090/${bigImageAdv}`
                    : '/img/noImage.jpg'
                }
                alt="fotoAvd"
              ></S.CardImg>
            </S.Picture>
            <S.PictureCarousel>{mapImagesList}</S.PictureCarousel>
          </S.BlockPicture>
          <S.BlockInfo>
            <S.InfoTitle>{adv.title}</S.InfoTitle>
            <S.InfoData>{formateDate(adv.created_on)}</S.InfoData>
            <S.InfoLocation>{adv.user.city}</S.InfoLocation>
            <S.InfoReviews>23 отзыва</S.InfoReviews>
            <S.InfoPrice>{adv.price} ₽</S.InfoPrice>
            <S.InfoButton onClick={() => setVisibliTelNum(true)}>
              <span>Показать телефон</span>
              {adv.user.phone
                ? `${formateTel(adv.user.phone)}`
                : 'номер не указан'}
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
            <S.TextParagraph>{adv.description}</S.TextParagraph>
          </S.BlockText>
        </S.AdvContent>
      )}
    </>
  )
}

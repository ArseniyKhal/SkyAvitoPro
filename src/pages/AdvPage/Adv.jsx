import { useState } from 'react'
import { Header } from 'components/Header/header'
import { NavMenu } from 'components/NavMenu/NavMenu'
import { useGetAllAdvsQuery } from 'services/servicesApi'
import { useParams } from 'react-router-dom'
import {
  formateDate,
  formatDateToDistance,
  formateComment,
} from 'helpers/helpers'
import { Loader } from 'App.styles'
import { Link } from 'react-router-dom'
import { useGetAllCommentsAdQuery } from 'services/servicesApi'
import { TelButton } from 'components/TelButton/TelButton'
import { Modal } from 'components/ModalWindow/Modal'
import * as S from './Adv.styles'

// переделать продает товары с ....
// сделать картинки кликабельными
// не сделаны отзывы

export const Adv = () => {
  const { advID } = useParams()
  const [isVisibliTelNum, setVisibliTelNum] = useState(false)
  const [isCommentVisible, setCommentVisible] = useState(false)
  const { data: advData, isLoading } = useGetAllAdvsQuery()
  const adv = advData?.filter((item) => {
    return item.id === +advID
  })[0]

  const { data: commentAdv } = useGetAllCommentsAdQuery(advID)
  //   console.log(adv)
  //   console.log(commentAdv)

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
        <Loader></Loader>
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
            <S.InfoData>{formatDateToDistance(adv.created_on)}</S.InfoData>
            <S.InfoLocation>{adv.user.city}</S.InfoLocation>
            <S.InfoReviews onClick={() => setCommentVisible(true)}>
              {commentAdv?.length} отзыв
              {formateComment(commentAdv?.length)}
            </S.InfoReviews>
            <S.InfoPrice>{adv.price.toLocaleString()} ₽</S.InfoPrice>
            <TelButton TelNamber={adv.user.phone}></TelButton>
            <S.SalesmanBlock>
              <S.SalesmanLogo>
                <S.Img
                  src={
                    adv.user.avatar
                      ? `http://localhost:8090/${adv.user.avatar}`
                      : '/img/userLogo.webp'
                  }
                  alt="fotoAvd"
                ></S.Img>
              </S.SalesmanLogo>
              <div>
                <S.SalesmanName>
                  <Link to={`/seller/${adv.user_id}`}>{adv.user.name} </Link>
                </S.SalesmanName>
                <S.SalesmanInfo>
                  Продает товары {formatDateToDistance(adv.user?.sells_from)}
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
      {isCommentVisible && (
        <Modal
          childComponent={<Comments commentList={commentAdv}></Comments>}
          cross={true}
          closeFunction={setCommentVisible}
        ></Modal>
      )}
    </>
  )
}

const Comments = ({ commentList }) => {
  // формируем список комментариев
  const mapCommentsList = commentList?.map((com) => {
    return (
      <>
        <S.Comment key={com.id}>
          <S.ComAvatar>
            <S.Img3
              src={
                com.author.avatar
                  ? `http://localhost:8090/${com.author.avatar}`
                  : '/img/userLogo.webp'
              }
              alt="avatar"
            ></S.Img3>
          </S.ComAvatar>
          <S.ComContent>
            <S.ComHeader>
              {com.author.name}
              <span>{formateDate(com.created_on)}</span>
            </S.ComHeader>
            <S.ComParagraph>Комментарий</S.ComParagraph>
            <S.ComText>{com.text}</S.ComText>
          </S.ComContent>
        </S.Comment>
      </>
    )
  })
  return (
    <>
      <S.NewAdvForm>
        <S.Title>Отзывы о товаре</S.Title>
        <S.InputsLable htmlFor="review">Добавить отзыв</S.InputsLable>
        <S.TextArea
          name="review"
          id="review"
          //  value={name}
          placeholder={'Введите отзыв'}
          //  onChange={handleChange}
        />
        <S.EnterButton
        //  disabled={    }
        //  onClick={() => handleClick()}
        >
          Опубликовать
        </S.EnterButton>
      </S.NewAdvForm>
      <S.CommentsBlock>{mapCommentsList}</S.CommentsBlock>
    </>
  )
}

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from 'components/Header/Header'
import { NavMenu } from 'components/NavMenu/NavMenu'
import {
  useGetAdvIDQuery,
  useGetAllCommentsAdQuery,
  useGetUserQuery,
  useDelAdvertMutation,
} from 'services/servicesApi'
import { formatDateToDistance, formateComment } from 'helpers/helpers'
import { Loader } from 'App.styles'
import { TelButton } from 'components/TelButton/TelButton'
import { Modal, Success, Error } from 'components/ModalWindow/Modal'
import { Comments } from 'components/Comments/Comments'
import { NewAdvert } from 'components/NewAdvert/NewAdvert'
import { useAuth } from 'hooks/use-auth'
import * as S from './Adv.styles'

export const Adv = () => {
  const { advID } = useParams()
  const navigate = useNavigate()
  const { data: adv, isError, isLoading } = useGetAdvIDQuery(advID)
  const { data: user } = useGetUserQuery()
  const [isModal, setModal] = useState(false)
  const [bigPic, setBigPic] = useState(null)
  const [delAdvert] = useDelAdvertMutation()
  const { data: commentAdv } = useGetAllCommentsAdQuery(advID)
  const { isAuth } = useAuth()

  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  // картинки
  let bigImageAdv
  if (bigPic) {
    bigImageAdv = bigPic
  } else {
    bigImageAdv = adv?.images[0]?.url
  }

  const mapImagesList = adv?.images.map((image) => {
    return (
      <S.SmallPicture key={image.id} onClick={() => setBigPic(image.url)}>
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

  // кнопка Редактирования
  const handleClickСhange = () => {
    setModal(<NewAdvert adv={adv} titleMod="Редактировать"></NewAdvert>)
  }

  // клик по продавцу
  const handleClickNavigate = () => {
    if (isAuth) {
      navigate(`/seller/${adv.user_id}`)
    } else {
      setModal(<Error text={`Пожалуйста авторизуйтесь!`}></Error>)
      setTimeout(() => {
        setModal(false)
      }, 2000)
    }
  }

  // кнопка Отзывы
  const handleClickComment = () => {
    if (isAuth) {
      setModal(<Comments advID={advID}></Comments>)
    } else {
      setModal(<Error text={`Пожалуйста авторизуйтесь!`}></Error>)
      setTimeout(() => {
        setModal(false)
      }, 2000)
    }
  }

  // кнопка Снять с публикации
  const handleClickDelete = () => {
    try {
      delAdvert(advID).then((result) => {
        if (!result.error) {
          setModal(<Success text="Объявление снято с публикации"></Success>)
          setTimeout(() => {
            setModal(false)
            navigate('/')
          }, 1000)
        } else {
          setModal(<Error text={`Ошибка! ${result.error.data.detail}`}></Error>)
          throw new Error(result.error.data.detail)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  // клик по картинке
  const handleClickPicture = () => {
    setModal(<BigPic src={bigImageAdv}></BigPic>)
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
            <S.Picture onClick={() => handleClickPicture()}>
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
            <S.InfoTitle>{adv?.title}</S.InfoTitle>
            <S.InfoData>{formatDateToDistance(adv?.created_on)}</S.InfoData>
            <S.InfoLocation>{adv.user.city}</S.InfoLocation>
            <S.InfoReviews onClick={() => handleClickComment()}>
              {commentAdv?.length} отзыв
              {formateComment(commentAdv?.length)}
            </S.InfoReviews>
            <S.InfoPrice>{adv?.price.toLocaleString()} ₽</S.InfoPrice>
            <S.ButtonsContainer>
              {adv?.user.id === user?.id ? (
                <>
                  <S.EnterButton onClick={() => handleClickСhange()}>
                    Редактировать
                  </S.EnterButton>
                  <S.EnterButton onClick={() => handleClickDelete()}>
                    Снять с публикации
                  </S.EnterButton>
                </>
              ) : (
                <TelButton
                  TelNamber={adv.user.phone}
                  setModal={setModal}
                ></TelButton>
              )}
            </S.ButtonsContainer>

            <S.SalesmanBlock onClick={() => handleClickNavigate()}>
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
                <S.SalesmanName>{adv.user.name}</S.SalesmanName>
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
      {isModal && (
        <Modal
          childComponent={isModal}
          cross={true}
          closeFunction={setModal}
        ></Modal>
      )}
    </>
  )
}

const BigPic = ({ src }) => {
  return (
    <>
      <div>
        <S.Img src={`http://localhost:8090/${src}`} alt="fotoAvd"></S.Img>
      </div>
    </>
  )
}

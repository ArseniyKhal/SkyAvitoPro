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
import { CloseBtn } from 'components/ClouseBtn/ClouseBtn'
import * as S from './Adv.styles'

export const Adv = () => {
  const { advID } = useParams()
  const navigate = useNavigate()
  const { data: adv, isLoading } = useGetAdvIDQuery(advID)
  const { data: user } = useGetUserQuery()
  const [isModal, setModal] = useState(false)
  const [pictureIndex, setPictureIndex] = useState(0)
  const [delAdvert] = useDelAdvertMutation()
  const { data: commentAdv } = useGetAllCommentsAdQuery(advID)

  // скрытие кнопки "Наверх ↑"
  const [offSet, setOffSet] = useState('')
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setOffSet(true) : setOffSet(false)
  })

  // картинки
  const mapImagesList = adv?.images.map((image, index) => {
    return (
      <S.SmallPicture key={image.id} onClick={() => setPictureIndex(index)}>
        <S.SmallImg
          src={
            adv?.images[pictureIndex]?.url
              ? `http://localhost:8090/${image.url}`
              : '/img/noImage.jpg'
          }
          alt="fotoAvd"
        ></S.SmallImg>
      </S.SmallPicture>
    )
  })

  // кнопка Редактирования
  const handleClickСhange = () => {
    setModal(
      <NewAdvert
        adv={adv}
        titleMod="Редактировать"
        closeFunction={setModal}
      ></NewAdvert>,
    )
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
  const handleClickPicture = (pictureIndex) => {
    if (adv.images.length) {
      setModal(
        <FullScreenPicture
          images={adv.images}
          index={pictureIndex}
        ></FullScreenPicture>,
      )
    }
  }

  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>
      {window.innerWidth <= 800 && (
        <div
          onClick={() => {
            navigate(-1)
          }}
        >
          <CloseBtn />
        </div>
      )}
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <S.AdvContent>
          <S.BlockPicture>
            <S.Picture
              onClick={() => handleClickPicture(pictureIndex)}
              style={{ cursor: adv.images.length && 'pointer' }}
            >
              {adv.images?.length > 1 && (
                <>
                  <S.Arrows>
                    <S.Arrow></S.Arrow>
                    <S.Arrow style={{ transform: 'rotate(180deg)' }}></S.Arrow>
                  </S.Arrows>
                  <S.ArrowLineBlock>
                    <S.ArrowLine
                      onClick={(event) => {
                        event.stopPropagation()
                        if (pictureIndex !== 0) {
                          setPictureIndex(pictureIndex - 1)
                        } else {
                          setPictureIndex(adv.images.length - 1)
                        }
                      }}
                    />
                    <S.ArrowLine
                      onClick={(event) => {
                        event.stopPropagation()
                        if (pictureIndex !== adv.images.length - 1) {
                          setPictureIndex(pictureIndex + 1)
                        } else {
                          setPictureIndex(0)
                        }
                      }}
                    />
                  </S.ArrowLineBlock>
                </>
              )}
              <S.Img
                src={
                  adv?.images[pictureIndex]?.url
                    ? `http://localhost:8090/${adv?.images[pictureIndex]?.url}`
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
            <S.InfoReviews
              onClick={() => setModal(<Comments advID={advID}></Comments>)}
            >
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
                <TelButton TelNamber={adv.user.phone}></TelButton>
              )}
            </S.ButtonsContainer>

            <S.SalesmanBlock onClick={() => navigate(`/seller/${adv.user_id}`)}>
              <S.SalesmanAvatar>
                <S.AvatarImg
                  src={
                    adv.user.avatar
                      ? `http://localhost:8090/${adv.user.avatar}`
                      : '/img/userLogo.webp'
                  }
                  alt="fotoAvd"
                ></S.AvatarImg>
              </S.SalesmanAvatar>
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

const FullScreenPicture = ({ images, index }) => {
  const [pictureBigIndex, setPictureBigIndex] = useState(index)
  return (
    <>
      <S.BigPic>
        {images?.length > 1 && (
          <>
            <S.Arrows>
              <S.Arrow></S.Arrow>
              <S.Arrow style={{ transform: 'rotate(180deg)' }}></S.Arrow>
            </S.Arrows>
            <S.ArrowLineBlock>
              <S.ArrowLine
                onClick={() => {
                  if (pictureBigIndex !== 0) {
                    setPictureBigIndex(pictureBigIndex - 1)
                  } else {
                    setPictureBigIndex(images.length - 1)
                  }
                }}
              />
              <S.ArrowLine
                onClick={() => {
                  if (pictureBigIndex !== images.length - 1) {
                    setPictureBigIndex(pictureBigIndex + 1)
                  } else {
                    setPictureBigIndex(0)
                  }
                }}
              />
            </S.ArrowLineBlock>
          </>
        )}
        <S.BigImg
          src={`http://localhost:8090/${images[pictureBigIndex]?.url}`}
          alt="fotoAvd"
        ></S.BigImg>
      </S.BigPic>
    </>
  )
}

import { formateDate } from 'helpers/helpers'
import { useState } from 'react'
import {
  usePostCommentAdvMutation,
  useGetAllCommentsAdQuery,
} from 'services/servicesApi'
import { useAuth } from 'hooks/use-auth'
import { Error } from 'components/ModalWindow/Modal'
import * as S from './Comments.styles'

export const Comments = ({ advID }) => {
  const { isAuth } = useAuth()
  const [isModal, setModal] = useState(false)
  const [inputComment, setInputComment] = useState('')
  const [postCommentAdv] = usePostCommentAdvMutation()
  const { data } = useGetAllCommentsAdQuery(advID)

  // формируем список комментариев
  const mapCommentsList = data?.map((com) => {
    return (
      <S.Comment key={com.id}>
        <S.ComAvatar>
          <S.Img
            src={
              com.author.avatar
                ? `http://localhost:8090/${com.author.avatar}`
                : '/img/userLogo.webp'
            }
            alt="avatar"
          ></S.Img>
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
    )
  })

  const handleClick = async () => {
    if (isAuth) {
      try {
        await postCommentAdv({ id: advID, text: inputComment })
      } catch (err) {
        console.log(err)
      } finally {
        setInputComment('')
      }
    } else {
      setModal(<Error text={`Пожалуйста авторизуйтесь!`}></Error>)
      setTimeout(() => {
        setModal(false)
      }, 2000)
    }
  }

  return (
    <>
      {isModal ? (
        isModal
      ) : (
        <>
          <S.NewAdvForm>
            <S.Title>Отзывы о товаре</S.Title>
            <S.InputsLable htmlFor="review">Добавить отзыв</S.InputsLable>
            <S.TextArea
              name="review"
              id="review"
              value={inputComment}
              placeholder={'Введите отзыв'}
              onChange={(e) => setInputComment(e.target.value)}
            />
            <S.EnterButton
              disabled={!inputComment}
              onClick={() => handleClick()}
            >
              Опубликовать
            </S.EnterButton>
          </S.NewAdvForm>
          <S.CommentsBlock>{mapCommentsList}</S.CommentsBlock>
        </>
      )}
    </>
  )
}

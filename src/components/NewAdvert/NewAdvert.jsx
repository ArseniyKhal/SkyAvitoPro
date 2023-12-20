import { useState } from 'react'
import { usePostAdvertMutation } from 'services/servicesApi'
import { Success } from 'components/ModalWindow/Modal'
import * as S from './NewAdvert.styles'

const initialState = {
  title: '',
  description: '',
  priceStr: '',
}
export const NewAvd = ({ closeFunction }) => {
  //   const [titleValue, setTitleValue] = useState('')
  //   const [descriptionValue, setDescriptionValue] = useState('')
  //   const [priceValue, setPriceValue] = useState(0)

  const [formValue, setFormValue] = useState(initialState)
  const [isSuccessPost, setSuccessPost] = useState(false)
  const [formFoto, setFormFoto] = useState('')
  const [postAdvert] = usePostAdvertMutation()
  const { title, description, priceStr } = formValue
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  //   console.log(formValue)

  const handleClick = async () => {
    try {
      if (formFoto) {
        console.log('функция С фото')
      } else {
        console.log('функция БЕЗ фото')
        const price = Number(priceStr)
        const postAdvertData = await postAdvert({
          title,
          description,
          price,
        })
        console.log(postAdvertData)
        if (postAdvertData) {
          setSuccessPost(true)
          setTimeout(() => {
            setSuccessPost(false)
            closeFunction(false)
          }, 2000)
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setFormValue(initialState)
      //   setIsSending(false)
    }
  }

  return (
    <>
      {!isSuccessPost ? (
        <S.NewAvdForm>
          <S.Title>Новое объявление</S.Title>
          <S.InputsLable htmlFor="title">Название</S.InputsLable>
          <S.NewAvdInput
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder={'Введите название'}
            onChange={handleChange}
          />
          <S.InputsLable htmlFor="description">Описание</S.InputsLable>
          <S.TextArea
            name="description"
            id="description"
            value={description}
            placeholder={'Введите описание'}
            onChange={handleChange}
          />
          <S.InputsName>
            Фотографии товара<span>не более 5 фотографий</span>
          </S.InputsName>
          <S.FotoContainer>
            <S.FotoInput>
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="90" height="90" fill="#F0F0F0" />
                <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
                <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
              </svg>{' '}
            </S.FotoInput>
            <S.FotoInput>
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="90" height="90" fill="#F0F0F0" />
                <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
                <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
              </svg>{' '}
            </S.FotoInput>
            <S.FotoInput>
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="90" height="90" fill="#F0F0F0" />
                <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
                <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
              </svg>{' '}
            </S.FotoInput>
            <S.FotoInput>
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="90" height="90" fill="#F0F0F0" />
                <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
                <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
              </svg>{' '}
            </S.FotoInput>
            <S.FotoInput>
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="90" height="90" fill="#F0F0F0" />
                <path d="M45 30V60" stroke="#D9D9D9" strokeWidth="3" />
                <path d="M60 45H30" stroke="#D9D9D9" strokeWidth="3" />
              </svg>{' '}
            </S.FotoInput>
          </S.FotoContainer>
          <S.InputsLable htmlFor="priceStr">Цена</S.InputsLable>
          <S.PriceInput
            type="number"
            name="priceStr"
            id="priceStr"
            value={priceStr}
            onChange={handleChange}
          />
          <S.PriceInputSpan>₽</S.PriceInputSpan>
          <S.EnterButton
            disabled={
              !formValue.title || !formValue.description || !formValue.priceStr
            }
            onClick={() => handleClick()}
          >
            Опубликовать
          </S.EnterButton>
        </S.NewAvdForm>
      ) : (
        <Success></Success>
      )}
    </>
  )
}

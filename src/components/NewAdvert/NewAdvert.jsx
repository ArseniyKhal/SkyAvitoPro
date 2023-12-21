import { useState } from 'react'
import {
  usePostAdvertMutation,
  usePostAdvertWithFotoMutation,
} from 'services/servicesApi'
import { Success } from 'components/ModalWindow/Modal'
import * as S from './NewAdvert.styles'

const initialState = {
  title: '',
  description: '',
  priceStr: '',
}
export const NewAvd = ({ closeFunction }) => {
  const [formValue, setFormValue] = useState(initialState)
  const [isSuccessPost, setSuccessPost] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [images, setImages] = useState([])
  const [imageSrc, setImageSrc] = useState([])
  const [postAdvert] = usePostAdvertMutation()
  const [postAdvertWithFoto] = usePostAdvertWithFotoMutation()
  const { title, description, priceStr } = formValue

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  //   console.log(formValue)

  const handleClick = async () => {
    try {
      const price = Number(priceStr)
      const postAdvertData = await postAdvert({
        title,
        description,
        price,
      })
      if (selectedImage) {
        console.log('функция С фото')
        const formData = new FormData()
        images.forEach((image) => {
          formData.append('file', image)
        })
        postAdvertDatafoto = await postAdvertWithFoto({
          title,
          description,
          price,
          images: images,
        })
        console.log(postAdvertDatafoto)
      }
      if (postAdvertData) {
        setSuccessPost(true)
        setTimeout(() => {
          setSuccessPost(false)
          closeFunction(false)
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setFormValue(initialState)
      //   setIsSending(false)
    }
  }

  const uploadContent = (e) => {
    e.preventDefault()
    if (e.target.files[0]) {
      setImages([...images, ...e.target.files])

      const newImageSrc = []
      if (
        e.target.files[0].type &&
        !e.target.files[0].type.startsWith('image/')
      ) {
        console.log(
          'File is not an image.',
          e.target.files[0].type,
          e.target.files[0],
        )
        return
      }
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        newImageSrc.push(reader.result)
        setImageSrc([...imageSrc, ...newImageSrc])
      })
      reader.readAsDataURL(e.target.files[0])
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
            <S.FotoInputBlock>
              <S.FotoInputLabel htmlFor="upload-photo"></S.FotoInputLabel>
              {imageSrc[0] && (
                <S.FotoPreview src={imageSrc[0]} alt="Preview"></S.FotoPreview>
              )}
              <S.FotoInput
                type="file"
                name="file"
                accept="/image/*"
                id="upload-photo"
                //  onChange={(e) => {
                //    const file = e.target.files[0]
                //    if (file && file.type.substring(0, 5) === 'image') {
                //      console.log(file)
                //      setSelectedImage(URL.createObjectURL(file))
                //    }
                //  }}
                onChange={(e) => {
                  uploadContent(e)
                }}
              ></S.FotoInput>
            </S.FotoInputBlock>

            <S.FotoInputBlock>
              <S.FotoInputLabel htmlFor="upload-photo"></S.FotoInputLabel>
              {imageSrc[1] && (
                <S.FotoPreview src={imageSrc[1]} alt="Preview"></S.FotoPreview>
              )}
              <S.FotoInput
                type="file"
                name="file"
                accept="/image/*"
                id="upload-photo"
                onChange={(e) => {
                  uploadContent(e)
                }}
              ></S.FotoInput>
            </S.FotoInputBlock>
            <S.FotoInputBlock>
              <S.FotoInputLabel htmlFor="upload-photo"></S.FotoInputLabel>
              {imageSrc[2] && (
                <S.FotoPreview src={imageSrc[2]} alt="Preview"></S.FotoPreview>
              )}
              <S.FotoInput
                type="file"
                name="file"
                accept="/image/*"
                id="upload-photo"
                onChange={(e) => {
                  uploadContent(e)
                }}
              ></S.FotoInput>
            </S.FotoInputBlock>
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

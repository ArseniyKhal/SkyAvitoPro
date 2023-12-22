import { useEffect, useState } from 'react'
import {
  usePostAdvertMutation,
  useAddFotoToAdvertMutation,
  useChangeAdvertMutation,
} from 'services/servicesApi'
import { Success } from 'components/ModalWindow/Modal'
import * as S from './NewAdvert.styles'

let initialState = {
  title: '',
  description: '',
  priceStr: '',
}
export const NewAdvert = ({ closeFunction, adv }) => {
  const [formValue, setFormValue] = useState(initialState)
  const [isSuccessPost, setSuccessPost] = useState(false)
  const [images, setImages] = useState([])
  const [imageSrc, setImageSrc] = useState([])
  const [postAdvert] = usePostAdvertMutation()
  const [addFotoToAdvert] = useAddFotoToAdvertMutation()
  const [changeAdvert] = useChangeAdvertMutation()
  const { title, description, priceStr } = formValue

  useEffect(() => {
    if (adv) {
      setFormValue({
        title: adv.title,
        description: adv.description,
        priceStr: adv.price,
      })
    }
  }, [adv])

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  // отправляем данные
  const handleClick = async () => {
    try {
      let postAdvertData
      const price = Number(priceStr)
      if (adv) {
        postAdvertData = await changeAdvert({
          id: adv.id,
          formValue,
        })
      } else {
        postAdvertData = await postAdvert({
          title,
          description,
          price,
        })
      }

      let addfotoData
      if (images.length) {
        const advId = postAdvertData.data.id
        images.forEach(async (image) => {
          addfotoData = await addFotoToAdvert({
            id: advId,
            image,
          })
        })
      }

      if (postAdvertData) {
        setImages([])
        setSuccessPost(true)
        setFormValue(initialState)
        setTimeout(() => {
          setSuccessPost(false)
          closeFunction(false)
        }, 1000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const uploadContent = (event) => {
    event.preventDefault()
    const selectedFile = event.target.files[0]

    if (selectedFile) {
      setImages([...images, selectedFile])
      const newImageSrc = []
      if (selectedFile.type && !selectedFile.type.startsWith('image/')) {
        console.log('File is not an image.', selectedFile.type, selectedFile)
        return
      }
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        newImageSrc.push(reader.result)
        setImageSrc([...imageSrc, ...newImageSrc])
      })
      reader.readAsDataURL(selectedFile)
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

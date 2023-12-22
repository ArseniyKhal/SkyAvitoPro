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
export const NewAdvert = ({ closeFunction, adv, titleMod }) => {
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
      setImages(adv.images)
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

      if (images.length) {
        const advId = postAdvertData.data.id
        images.forEach(async (image) => {
          await addFotoToAdvert({
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

  // формируем Preview
  const arr = [0, 1, 2, 3, 4]
  let mapPreviewList
  let counter = 0
  let ImgSrc = null
  mapPreviewList = arr?.map((index) => {
    if (adv?.images[index]) {
      ImgSrc = `http://localhost:8090/${adv.images[index].url}`
    } else if (imageSrc[counter]) {
      ImgSrc = imageSrc[counter]
      counter++
    } else {
      ImgSrc = null
    }
    return (
      <S.FotoInputBlock key={index}>
        <S.FotoInputLabel htmlFor="upload-photo"></S.FotoInputLabel>
        {ImgSrc && <S.FotoPreview src={ImgSrc} alt="Preview"></S.FotoPreview>}
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
    )
  })

  const uploadContent = (event) => {
    event.preventDefault()
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setImages([...images, selectedFile])

      if (selectedFile.type && !selectedFile.type.startsWith('image/')) {
        console.log('File is not an image.', selectedFile.type, selectedFile)
        return
      }
      const newImageSrc = []
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
          <S.Title>{titleMod} объявление</S.Title>
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
          <S.FotoContainer>{mapPreviewList}</S.FotoContainer>
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

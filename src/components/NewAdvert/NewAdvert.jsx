import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  usePostAdvertMutation,
  useDelFotoToAdvertMutation,
  useAddFotoToAdvertMutation,
  useChangeAdvertMutation,
} from 'services/servicesApi'
import { Success } from 'components/ModalWindow/Modal'
import * as S from './NewAdvert.styles'

let initialState = {
  title: '',
  description: '',
  price: '',
}
export const NewAdvert = ({ closeFunction, adv, titleMod }) => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState(initialState)
  const [isSuccessPost, setSuccessPost] = useState(false)
  const [images, setImages] = useState([])
  const [imageSrc, setImageSrc] = useState([])
  const [postAdvert] = usePostAdvertMutation()
  const [addFotoToAdvert] = useAddFotoToAdvertMutation()
  const [changeAdvert] = useChangeAdvertMutation()
  const [delFotoToAdvert] = useDelFotoToAdvertMutation()
  const { title, description, price } = formValue

  useEffect(() => {
    if (adv) {
      setFormValue({
        title: adv.title,
        description: adv.description,
        price: adv.price,
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
      if (adv) {
        postAdvertData = await changeAdvert({
          id: adv.id,
          formValue,
        })
      } else {
        postAdvertData = await postAdvert(formValue)
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
      if (postAdvertData.data) {
        setImages([])
        setSuccessPost(true)
        setFormValue(initialState)
        setTimeout(() => {
          setSuccessPost(false)
          closeFunction(false)
          navigate(`/adv/${postAdvertData.data.id}`)
        }, 1000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // формируем Preview
  const arr = [0, 1, 2, 3, 4]
  let counter = 0
  let ImgSrc = null
  let mapPreviewList = arr?.map((index) => {
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
        {/* {ImgSrc && (
          <S.FotoDelBtn
            onClick={() => {
              hendleClickDel({ index })
            }}
          ></S.FotoDelBtn>
        )} */}
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

  // клик для удаления картинки
  //   const hendleClickDel = async ({ index }) => {
  //  try {
  //    const result = await delFotoToAdvert({
  //      id: adv.id,
  //      file_url: images[index].url,
  //    })
  //    console.log(result)
  //  } catch (error) {
  //    console.log(error)
  //  }
  //   }

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

  //   useEffect(() => {}, [dispatch])

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
          <div style={{ position: 'relative' }}>
            <S.InputsLable htmlFor="price">Цена</S.InputsLable>
            <S.PriceInput
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={handleChange}
            />
            <S.PriceInputSpan>₽</S.PriceInputSpan>
          </div>

          <S.EnterButton
            disabled={
              !formValue.title || !formValue.description || !formValue.price
            }
            onClick={() => handleClick()}
          >
            {adv ? 'Редактировать' : 'Опубликовать'}
          </S.EnterButton>
        </S.NewAvdForm>
      ) : (
        <Success></Success>
      )}
    </>
  )
}

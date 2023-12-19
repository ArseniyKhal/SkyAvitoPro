import { useRef, useState } from 'react'
import { useUploadUserAvatarMutation } from 'services/servicesApi'
import * as S from './ChangeAvatar.styles'

export const ChangeAvatar = ({ setSuccessModal, setChangeAvaModal }) => {
  const [uploadUserAvatar] = useUploadUserAvatarMutation()
  const [isErrorChange, setErrorChange] = useState(null)
  const imageRef = useRef(null)
  const [file, setFile] = useState('')
  let uploadUserAvatarData
  const handleClick = async () => {
    const formData = new FormData()
    formData.append('file', file)
    uploadUserAvatarData = await uploadUserAvatar(formData)
    if (uploadUserAvatarData.data) {
      setChangeAvaModal(false)
      setSuccessModal(true)
      setTimeout(() => {
        setSuccessModal(false)
      }, 2000)
    } else {
      setErrorChange(uploadUserAvatarData.error.data.detail)
    }
  }

  function useDisplayImage() {
    const [result, setResult] = useState('')
    function uploader(e) {
      const imageFile = e.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        setResult(e.target.result)
      })
      reader.readAsDataURL(imageFile)
    }
    return { result, uploader }
  }
  const { result, uploader } = useDisplayImage()

  return (
    <>
      {isErrorChange ? (
        <S.Error>Ошибка: {isErrorChange}</S.Error>
      ) : (
        <S.ChangeAvatarBlock>
          <S.ChangeAvatarInput
            type="file"
            name="file"
            accept="/image/*"
            id="file-input"
            onChange={(e) => {
              const file = e.target.files[0]
              if (file && file.type.substring(0, 5) === 'image') {
                setFile(file)
                uploader(e)
              }
            }}
          ></S.ChangeAvatarInput>
          {result && <S.PreviewImg ref={imageRef} src={result} alt="" />}
          <S.ChangeAvatarBtn disabled={!file} onClick={() => handleClick()}>
            Заменить
          </S.ChangeAvatarBtn>
        </S.ChangeAvatarBlock>
      )}
    </>
  )
}

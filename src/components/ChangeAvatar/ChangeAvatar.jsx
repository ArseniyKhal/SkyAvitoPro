import { useRef, useState } from 'react'
import { useUploadUserAvatarMutation } from 'services/servicesApi'
import { Success } from 'components/ModalWindow/Modal'
import * as S from './ChangeAvatar.styles'

export const ChangeAvatar = ({ setModal }) => {
  const [uploadUserAvatar] = useUploadUserAvatarMutation()
  const [isErrorChange, setErrorChange] = useState(null)
  const [isSuccess, setSuccess] = useState(null)
  const [file, setFile] = useState('')

  const handleClick = async () => {
    const uploadUserAvatarData = await uploadUserAvatar(file)
    if (uploadUserAvatarData.data) {
      setSuccess(true)
      setTimeout(() => {
        setModal(null)
        setSuccess(false)
      }, 2000)
    } else {
      setErrorChange(uploadUserAvatarData.error.data.detail)
    }
  }

  const [srcAvatar, setSrcAvatar] = useState(null)
  const uploader = (file) => {
    const reader = new FileReader()
    reader.addEventListener('load', (e) => {
      setSrcAvatar(e.target.result)
    })
    reader.readAsDataURL(file)
  }

  return (
    <>
      {isErrorChange ? (
        <S.Error>Ошибка: {isErrorChange}</S.Error>
      ) : (
        <>
          {isSuccess ? (
            <Success />
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
                    uploader(file)
                  }
                }}
              ></S.ChangeAvatarInput>
              {srcAvatar && <S.PreviewImg src={srcAvatar} alt="PreviewImg" />}
              <S.ChangeAvatarBtn disabled={!file} onClick={() => handleClick()}>
                Заменить
              </S.ChangeAvatarBtn>
            </S.ChangeAvatarBlock>
          )}
        </>
      )}
    </>
  )
}

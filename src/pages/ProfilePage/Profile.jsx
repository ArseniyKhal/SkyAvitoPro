import { Header } from 'components/Header/header'
import { Card } from 'components/Card/Card'
import { NavMenu } from 'components/NavMenu/NavMenu'
import { useGetUserQuery } from 'services/servicesApi'
import { Loader } from 'App.styles'
import { useRef, useState } from 'react'
import {
  usePatchUserMutation,
  useUploadUserAvatarMutation,
} from 'services/servicesApi'
import { Modal } from 'components/ModalWindow/Modal'
import * as S from './Profile.styles'

const initialState = {
  name: '',
  surname: '',
  city: '',
  tel: '',
}

export const Profile = () => {
  const [isSending, setIsSending] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  const [isChangeAvaModal, setChangeAvaModal] = useState(false)
  const [patchUser] = usePatchUserMutation()
  const { data: user, isLoading, isError } = useGetUserQuery()
  //   console.log(user)
  const [formValue, setFormValue] = useState(initialState)
  const { name, surname, city, tel } = formValue

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  const handleClick = async () => {
    try {
      setIsSending(true)
      const patchUserData = await patchUser({ name, surname, city, tel })
      if (patchUserData) {
        setSuccessModal(true)
        setTimeout(() => {
          setSuccessModal(false)
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setFormValue(initialState)
      setIsSending(false)
    }
  }
  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>

      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {isError ? (
            'Какая то ошибка'
          ) : (
            <>
              <S.Title>Здравствуйте, {user.name || user.email}!</S.Title>
              {/* блок Настройки профиля */}
              <S.ProfileSettings>
                <S.SubTitle>Настройки профиля</S.SubTitle>
                <S.ProfileSettingsContent>
                  <S.BlockAvatar>
                    <S.AvatarPicture>
                      <S.AvatarImg
                        src={
                          user.avatar
                            ? `http://localhost:8090/${user.avatar}`
                            : '/img/userLogo.webp'
                        }
                        alt="avatarImg"
                      ></S.AvatarImg>
                    </S.AvatarPicture>
                    <S.AvatarСhangeBtn
                      onClick={() => {
                        setChangeAvaModal(true)
                      }}
                    >
                      Заменить
                    </S.AvatarСhangeBtn>
                  </S.BlockAvatar>
                  <S.BlockSettings>
                    <S.InputsBlock>
                      <S.Label htmlFor="name">Имя</S.Label>
                      <S.ProfileSettingsInput
                        type="text"
                        name="name"
                        value={name}
                        placeholder={user.name}
                        onChange={handleChange}
                      />
                    </S.InputsBlock>
                    <S.InputsBlock>
                      <S.Label htmlFor="surname">Фамилия</S.Label>
                      <S.ProfileSettingsInput
                        type="text"
                        name="surname"
                        value={surname}
                        placeholder={user.surname}
                        onChange={handleChange}
                      />
                    </S.InputsBlock>
                    <S.InputsBlock>
                      <S.Label htmlFor="city">Город</S.Label>
                      <S.ProfileSettingsInput
                        type="text"
                        name="city"
                        value={city}
                        placeholder={user.city}
                        onChange={handleChange}
                      />
                    </S.InputsBlock>
                    <S.InputsBlockTel>
                      <S.Label htmlFor="city">Телефон</S.Label>
                      <S.ProfileSettingsInput
                        type="tel"
                        name="tel"
                        value={tel}
                        placeholder={user.phone}
                        onChange={handleChange}
                      />
                    </S.InputsBlockTel>
                    <S.EnterButton
                      disabled={
                        !formValue.name &&
                        !formValue.surname &&
                        !formValue.city &&
                        !formValue.tel &&
                        !isSending
                      }
                      onClick={() => handleClick()}
                    >
                      Сохранить
                    </S.EnterButton>
                  </S.BlockSettings>
                </S.ProfileSettingsContent>
              </S.ProfileSettings>
              {/* Блок Мои товары */}
              <S.UsersProducts>
                <S.SubTitle>Мои товары</S.SubTitle>
                <S.MainList>
                  {/* <Card></Card>
         				 <Card></Card>
         				 <Card></Card>
        					  <Card></Card> */}
                </S.MainList>
              </S.UsersProducts>
            </>
          )}
          {isSuccessModal && (
            <Modal
              childComponent={<Success></Success>}
              cross={true}
              closeFunction={setSuccessModal}
            ></Modal>
          )}
          {isChangeAvaModal && (
            <Modal
              childComponent={
                <ChangeAvatar
                  setSuccessModal={setSuccessModal}
                  setChangeAvaModal={setChangeAvaModal}
                ></ChangeAvatar>
              }
              cross={true}
              closeFunction={setChangeAvaModal}
            ></Modal>
          )}
        </>
      )}
    </>
  )
}

const Success = () => {
  return (
    <>
      <S.SuccessBlock>
        Успешный успех!!!
        <S.SuccessImg
          src={'/img/progressOk.png'}
          alt="SuccessImg"
        ></S.SuccessImg>
      </S.SuccessBlock>
    </>
  )
}

const ChangeAvatar = ({ setSuccessModal, setChangeAvaModal }) => {
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

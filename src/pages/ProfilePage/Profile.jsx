import { useState } from 'react'
import { Header } from 'components/Header/Header'
import { Card } from 'components/Card/Card'
import { NavMenu } from 'components/NavMenu/NavMenu'
import {
  useChangePasswordMutation,
  useGetUserQuery,
} from 'services/servicesApi'
import { Loader } from 'App.styles'
import { usePatchUserMutation, useGetAllAdvsQuery } from 'services/servicesApi'
import { Modal, Success } from 'components/ModalWindow/Modal'
import { ChangeAvatar } from 'components/ChangeAvatar/ChangeAvatar'
import * as S from './Profile.styles'

const initialState = {
  name: '',
  surname: '',
  city: '',
  phone: '',
}

export const Profile = () => {
  const { data: adverts } = useGetAllAdvsQuery()
  const [isSending, setIsSending] = useState(false)
  const [isModal, setModal] = useState(false)
  const [patchUser] = usePatchUserMutation()
  const { data: user, isLoading, isError } = useGetUserQuery()
  const [formValue, setFormValue] = useState(initialState)
  const { name, surname, city, phone } = formValue

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsSending(true)
      const patchUserData = await patchUser(formValue)
      if (patchUserData) {
        setModal(<Success />)
        setTimeout(() => {
          setModal(null)
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setFormValue(initialState)
      setIsSending(false)
    }
  }

  // кнопка смены аватара
  const handleClickСhangeAvatar = () => {
    setModal(<ChangeAvatar setModal={setModal}></ChangeAvatar>)
  }

  // формируем список объявлений
  const advList = adverts?.filter((el) => {
    return el.user.id === user?.id
  })
  const mapAdvsList = advList?.map((advCard) => {
    return <Card key={advCard?.id} dataCard={advCard}></Card>
  })

  return (
    <>
      <Header></Header>
      <NavMenu></NavMenu>

      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {isError ? (
            'Пожалуйста, авторизуйтесь заново'
          ) : (
            <>
              <S.Title>Здравствуйте, {user.name || user.email}!</S.Title>
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
                        handleClickСhangeAvatar()
                      }}
                    >
                      Заменить
                    </S.AvatarСhangeBtn>
                  </S.BlockAvatar>
                  <S.BlockSettings onSubmit={handleSubmit}>
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
                        name="phone"
                        value={phone}
                        placeholder={user.phone}
                        onChange={handleChange}
                      />
                    </S.InputsBlockTel>
                    <S.EnterButton
                      disabled={
                        !formValue.name &&
                        !formValue.surname &&
                        !formValue.city &&
                        !formValue.phone &&
                        !isSending
                      }
                      style={{ marginTop: '-20px' }}
                      type="submit"
                    >
                      Сохранить
                    </S.EnterButton>
                  </S.BlockSettings>
                  <S.ChangePasBtn
                    onClick={() => {
                      setModal(
                        <ChangePassword setModal={setModal}></ChangePassword>,
                      )
                    }}
                  >
                    Сменить пароль
                  </S.ChangePasBtn>
                </S.ProfileSettingsContent>
              </S.ProfileSettings>
              <S.UsersProducts>
                <S.SubTitle>Мои товары</S.SubTitle>
                <S.ProductsList>{mapAdvsList}</S.ProductsList>
              </S.UsersProducts>
            </>
          )}

          {isModal && (
            <Modal
              childComponent={isModal}
              cross={true}
              closeFunction={setModal}
            ></Modal>
          )}
        </>
      )}
    </>
  )
}

export const ChangePassword = ({ setModal }) => {
  const [changePassword] = useChangePasswordMutation()
  const [inputError, setInputError] = useState(null)
  const [oldPass, setOldPass] = useState('')
  const [pass, setPass] = useState('')
  const [repPass, setRepPass] = useState('')
  const [isSuccess, setSuccess] = useState(null)

  const handleClickСhangePassword = async () => {
    try {
      if (!pass) {
        return setInputError('Введите пароль')
      }
      if (pass !== repPass) {
        return setInputError('пароли не совпадают')
      }
      if (pass.length < 6 && pass.length > 0) {
        return setInputError('Не менее 6 символов')
      }
      const changePassData = await changePassword({ oldPass, pass })
      if (changePassData.error) {
        setInputError(changePassData.error.data.detail)
      } else {
        setInputError(null)
        setSuccess(true)
        setTimeout(() => {
          setModal(null)
          setSuccess(false)
        }, 2000)
      }
    } catch (error) {
      setInputError(error)
    }
  }
  return (
    <>
      {isSuccess ? (
        <Success />
      ) : (
        <S.Inputs>
          <S.ModalInput
            type="password"
            name="old-password"
            placeholder={'Старый пароль'}
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Пароль (не менее 6 символов)"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <S.ModalInput
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repPass}
            onChange={(e) => setRepPass(e.target.value)}
          />
          {inputError && <S.Error>{inputError}</S.Error>}
          <S.EnterButton
            onClick={() => {
              handleClickСhangePassword()
            }}
          >
            Сменить пароль
          </S.EnterButton>
        </S.Inputs>
      )}
    </>
  )
}

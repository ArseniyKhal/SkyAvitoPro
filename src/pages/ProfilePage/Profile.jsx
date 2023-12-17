import { Header } from 'components/Header/header'
import { Card } from 'components/Card/Card'
import { NavMenu } from 'components/NavMenu/NavMenu'
import { useGetUserQuery } from 'services/servicesApi'
import { Loader2 } from 'App.styles'
import { useState } from 'react'
import { usePatchUserMutation } from 'services/servicesApi'
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
        <Loader2></Loader2>
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
                    <S.AvatarСhangeBtn>Заменить</S.AvatarСhangeBtn>
                  </S.BlockAvatar>
                  <S.BlockSettings>
                    <S.InputsBlock>
                      <S.Label htmlFor="name">Имя</S.Label>
                      <S.ProfileSettingsInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                    </S.InputsBlock>
                    <S.InputsBlock>
                      <S.Label htmlFor="surname">Фамилия</S.Label>
                      <S.ProfileSettingsInput
                        type="text"
                        name="surname"
                        value={surname}
                        onChange={handleChange}
                      />
                    </S.InputsBlock>
                    <S.InputsBlock>
                      <S.Label htmlFor="city">Город</S.Label>
                      <S.ProfileSettingsInput
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange}
                      />
                    </S.InputsBlock>
                    <S.InputsBlockTel>
                      <S.Label htmlFor="city">Телефон</S.Label>
                      <S.ProfileSettingsInput
                        type="tel"
                        name="tel"
                        value={tel}
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

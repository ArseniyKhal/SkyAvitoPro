import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from 'services/servicesApi'
import { setUser } from 'store/slices/authSlice'
import { saveUserInfoInLocalStorage } from 'helpers/helpers'
import { CloseBtn } from 'components/ClouseBtn/ClouseBtn'
import * as S from './Auth.styles'

const initialState = {
  email: '',
  password: '',
  name: '',
  surname: '',
  city: '',
}

export const Auth = ({ typeLogin }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputError, setInputError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formValue, setFormValue] = useState(initialState)
  const { email, password, name, surname, city } = formValue
  const [repPass, setRepPass] = useState('')

  const nameEnterBtn = typeLogin ? 'Войти' : 'Зарегистрироваться'
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
  const [loginUser] = useLoginUserMutation()
  const [registerUser] = useRegisterUserMutation()

  const handleClick = async () => {
    if (!formValue.email) {
      return setInputError('Введите email')
    }
    if (!formValue.password) {
      return setInputError('Введите пароль')
    }
    if (!typeLogin && formValue.password !== repPass) {
      return setInputError('пароли не совпадают')
    }
    if (
      !typeLogin &&
      formValue.password.length < 6 &&
      formValue.password.length > 0
    ) {
      return setInputError('Не менее 6 символов')
    }
    try {
      setIsLoading(true)
      setInputError('')
      if (typeLogin) {
        //авторизация
        const loginData = await loginUser({ email, password })
        if (loginData.data) {
          dispatch(
            setUser({
              email: formValue.email,
              access: loginData.data.access_token,
              refresh: loginData.data.refresh_token,
            }),
          )
          saveUserInfoInLocalStorage(loginData, formValue.email)
          navigate('/')
        } else {
          setInputError(loginData.error.message)
          throw new Error(loginData.error.data.detail)
        }
      } else {
        // регистрация
        const registerData = await registerUser({
          email,
          password,
          name,
          surname,
          city,
        })
        if (registerData.data) {
          const loginData = await loginUser({ email, password })
          if (loginData.data) {
            console.log(loginData)
            dispatch(
              setUser({
                email: formValue.email,
                access: loginData.data.access_token,
                refresh: loginData.data.refresh_token,
              }),
            )
            saveUserInfoInLocalStorage(loginData, formValue)
            navigate('/')
          }
        } else {
          setInputError('пользователь с такими данными уже существует')
          throw new Error(registerData.error.data.details)
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div
        onClick={() => {
          navigate('/')
        }}
      >
        <CloseBtn />
      </div>
      <S.ModalForm>
        <S.ModalLogo>
          <svg
            width="40"
            height="36"
            viewBox="0 0 40 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.68844 28.4581C1.54195 29.698 0 28.6648 0 26.827C0 24.8705 0 19.0003 0 19.0003C0 19.0003 0 13.1301 0 11.1737C0 9.33591 1.54099 8.30269 3.68844 9.54255C7.03156 11.4731 17.06 17.2668 17.06 17.2668C18.3934 18.037 18.3934 19.9628 17.06 20.7329C17.06 20.7338 7.03156 26.5275 3.68844 28.4581Z"
              fill="#00C1FF"
            />
            <path
              d="M14.7265 28.4574C12.58 29.6972 11.0381 28.664 11.0381 26.8262C11.0381 24.8698 11.0381 18.9996 11.0381 18.9996C11.0381 18.9996 11.0381 13.1294 11.0381 11.173C11.0381 9.33518 12.5791 8.30196 14.7265 9.54182C17.996 11.4303 27.8044 17.0968 27.8044 17.0968C29.2689 17.9425 29.2689 20.0567 27.8044 20.9024C27.8034 20.9024 17.996 26.5689 14.7265 28.4574Z"
              fill="#BCEC30"
            />
            <mask
              id="mask0_26_1414"
              maskUnits="userSpaceOnUse"
              x="11"
              y="9"
              width="18"
              height="20"
            >
              <path
                d="M14.7265 28.4574C12.58 29.6972 11.0381 28.664 11.0381 26.8262C11.0381 24.8698 11.0381 18.9996 11.0381 18.9996C11.0381 18.9996 11.0381 13.1294 11.0381 11.173C11.0381 9.33518 12.5791 8.30196 14.7265 9.54182C17.996 11.4303 27.8044 17.0968 27.8044 17.0968C29.2689 17.9425 29.2689 20.0567 27.8044 20.9024C27.8035 20.9024 17.996 26.5689 14.7265 28.4574Z"
                fill="#6FE4FF"
              />
            </mask>
            <g mask="url(#mask0_26_1414)">
              <g filter="url(#filter0_f_26_1414)">
                <path
                  d="M3.68893 28.4585C1.54244 29.6983 0.000488281 28.6651 0.000488281 26.8273C0.000488281 24.8709 0.000488281 19.0007 0.000488281 19.0007C0.000488281 19.0007 0.000488281 13.1305 0.000488281 11.1741C0.000488281 9.33628 1.54148 8.30306 3.68893 9.54292C7.03205 11.4735 17.0605 17.2672 17.0605 17.2672C18.3939 18.0373 18.3939 19.9631 17.0605 20.7333C17.0605 20.7342 7.03205 26.5279 3.68893 28.4585Z"
                  fill="#99D100"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_26_1414"
                x="-1.46075"
                y="7.53986"
                width="20.9825"
                height="22.9216"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.730621"
                  result="effect1_foregroundBlur_26_1414"
                />
              </filter>
            </defs>
          </svg>
          <S.LogoText>SkyAvitoPro</S.LogoText>
        </S.ModalLogo>
        <S.Inputs>
          <S.ModalInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder={typeLogin ? 'Пароль' : 'Пароль (не менее 6 символов)'}
            value={password}
            onChange={handleChange}
          />
          {!typeLogin && (
            <>
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repPass}
                onChange={(e) => setRepPass(e.target.value)}
              />
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
                value={name}
                onChange={handleChange}
              />
              <S.ModalInput
                type="text"
                name="surname"
                placeholder="Фамилия (необязательно)"
                value={surname}
                onChange={handleChange}
              />
              <S.ModalInput
                type="text"
                name="city"
                placeholder="Город (необязательно)"
                value={city}
                onChange={handleChange}
              />
            </>
          )}
        </S.Inputs>
        {inputError && <S.Error>{inputError}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton disabled={isLoading} onClick={() => handleClick()}>
            {isLoading ? 'Логинимся' : nameEnterBtn}
          </S.PrimaryButton>
          {typeLogin && (
            <S.SecondaryButton
              onClick={() => {
                setInputError('')
                navigate('/registration')
              }}
            >
              Зарегистрироваться
            </S.SecondaryButton>
          )}
        </S.Buttons>
      </S.ModalForm>
    </>
  )
}

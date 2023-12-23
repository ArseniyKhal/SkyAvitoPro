import { useState } from 'react'
import { useAuth } from 'hooks/use-auth'
import { Error } from 'components/ModalWindow/Modal'
import * as S from './TelButton.styles'

// преобразование номера телефона
export const formateTel = (data, isVisibliTelNum) => {
  const phoneNumbers = data.replace(/ /g, '').split('').reverse().join('')
  let PhoneN = phoneNumbers.substring(0, 7)
  if (!isVisibliTelNum) {
    PhoneN = 'XX XX XXX'
  } else {
    PhoneN = PhoneN.replace(/(\d{2})(\d{2})(\d{3})/, '$1 $2 $3')
  }
  const PhoneCode = phoneNumbers.substring(7, 10)
  const CodeСountries = phoneNumbers.substring(11, 13)
  return `${PhoneN} ${PhoneCode} ${CodeСountries}`.split('').reverse().join('')
}

export const TelButton = ({ TelNamber, setModal }) => {
  const { isAuth } = useAuth()
  const [isVisibliTelNum, setVisibliTelNum] = useState(false)

  const handleClick = () => {
    if (isAuth) {
      setVisibliTelNum(true)
    } else {
      setModal(<Error text={`Пожалуйста авторизуйтесь!`}></Error>)
      setTimeout(() => {
        setModal(false)
      }, 2000)
    }
  }

  return (
    <S.InfoButton onClick={() => handleClick()}>
      {TelNamber && <span>Показать телефон</span>}
      {TelNamber
        ? `${
            isVisibliTelNum
              ? formateTel(TelNamber, isVisibliTelNum)
              : formateTel(TelNamber, isVisibliTelNum)
          }`
        : 'номер телефона не указан'}
    </S.InfoButton>
  )
}

import { useState } from 'react'
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

export const TelButton = ({ TelNamber }) => {
  const [isVisibliTelNum, setVisibliTelNum] = useState(false)

  return (
    <S.InfoButton onClick={() => setVisibliTelNum(true)}>
      <span>Показать телефон</span>
      {TelNamber
        ? `${
            isVisibliTelNum
              ? formateTel(TelNamber, isVisibliTelNum)
              : formateTel(TelNamber, isVisibliTelNum)
          }`
        : 'номер не указан'}
    </S.InfoButton>
  )
}

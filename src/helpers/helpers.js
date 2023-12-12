import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

// преобразует дату
export const formateDate = (data) => {
  return formatDistanceToNow(new Date(data), { locale: ru })
}

// преобразование номера телефона
export const formateTel = (data, isVisibliTelNum) => {
  const phoneNumbers = data.replace(/ /g, '').split('').reverse().join('')
  let PhoneN = phoneNumbers.substring(0, 7)
  if (!isVisibliTelNum) {
    PhoneN = 'XX XX XXX'
  }
  PhoneN = PhoneN.replace(/(\d{2})(\d{2})(\d{3})/, '$1 $2 $3')
  const PhoneCode = phoneNumbers.substring(7, 10)
  const CodeСountries = phoneNumbers.substring(11, 13)
  return `${PhoneN} ${PhoneCode} ${CodeСountries}`.split('').reverse().join('')
}

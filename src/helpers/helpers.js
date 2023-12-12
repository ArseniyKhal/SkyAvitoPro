import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

// преобразует дату
export const formateDate = (data) => {
  return formatDistanceToNow(new Date(data), { locale: ru })
}

// преобразование номера телефона
export const formateTel = (data) => {
  return data.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

export const formateTelNumber = (data) => {
  return `${data.split('').splice(0, 4).join('')}XXXXXXX`
}

export const formateSecretTelNumber = (data) => {
  //   return `${data.split('').splice(0, 4).join('')}XXXXXXX`
}

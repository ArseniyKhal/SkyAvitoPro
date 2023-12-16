import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

// преобразует дату
export const formateDate = (data) => {
  return formatDistanceToNow(new Date(data), { locale: ru })
}

// формирует окончание слова ОТЗЫВов
export const formateComment = (data) => {
  if (data > 10 && data < 20) {
    return 'ов'
  } else if (data % 10 === 1) {
    return ''
  } else if (data % 10 > 1 && data % 10 < 5) {
    return 'а'
  } else {
    return 'ов'
  }
}

// записывает данные пользователя в Local Storage
export const saveUserInfoInLocalStorage = (loginData, formValue) => {
  const userInfo = JSON.stringify({
    email: formValue.email,
    access: loginData.data.access_token,
    refresh: loginData.data.refresh_token,
  })
  localStorage.setItem('userSkyVito', userInfo)
}

import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

// преобразует дату
export const formateDate = (data) => {
  return formatDistanceToNow(new Date(data), { locale: ru })
}

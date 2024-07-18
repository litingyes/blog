import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

export const transformDateStringToTimestamp = (date: string) => dayjs(date, 'YYYY-MM-DD')

export const transformDateStringToDisplayDate = (date: string) => transformDateStringToTimestamp(date).format('LL')

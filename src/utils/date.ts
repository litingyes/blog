import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

export const transformPostDateToTimestamp = (date: string) => dayjs(date, 'YYYY-MM-DD')

export const transformPostDateToDisplayDate = (date: string) => transformPostDateToTimestamp(date).format('LL')

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

export function transformDateStringToTimestamp(date: string) {
  if (!date)
    return 0

  return dayjs(date, 'YYYY-MM-DD').valueOf()
}

export const transformDateStringToDisplayDate = (date: string) => dayjs(transformDateStringToTimestamp(date)).format('LL')

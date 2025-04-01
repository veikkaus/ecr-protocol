import { DateTime } from 'luxon'

export const getTransTime = (messageIndex: number) => {
  const dateTimeObject = DateTime.now().minus({seconds: messageIndex > 0 ? messageIndex * 30 : 0}).toJSDate()
  return DateTime.fromJSDate(dateTimeObject).toFormat('HHmmss')
}

export const STATIC_TRANS_TIME = '120103' // 12:01:03



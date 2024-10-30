import { DateTime } from 'luxon'

function padLeft(n?: number) {
  return n ? n.toString().padStart(2, '0') : ''
}

export const getTransTime = (messageIndex: number) => {
  const dateTimeObject = DateTime.now().minus({seconds: messageIndex > 0 ? messageIndex * 30 : 0}).toObject()
  return `${padLeft(dateTimeObject.hour)}${padLeft(dateTimeObject.minute)}${padLeft(dateTimeObject.second)}`
}

export const STATIC_TRANS_TIME = '120103' // 12:01:03



import { toDataURL } from 'qrcode'
import fs from 'fs'
import { DateTime } from 'luxon'
import { color } from '../colors'

export function createQrCode(ticketId: string) {
  const dateTime = DateTime.now()
  const filename = `${dateTime.toFormat('yyyyMMddHHmmss')}_${ticketId}.png`
  console.log(color.magenta(`Creating QR-code: ${filename}`))
  toDataURL(ticketId, { errorCorrectionLevel: 'M', version: 3}).then(url => {
    fs.writeFileSync(`./${filename}`, Buffer.from(url.split(',')[1], 'base64'))
  })
}  
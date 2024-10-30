import { toBuffer } from 'bwip-js'
import fs from 'fs'
import { DateTime } from 'luxon'
import { color } from '../colors'

export function createBarcode(ticketId: string) {
  const dateTime = DateTime.now()
  const filename = `${dateTime.toFormat('yyyyMMddHHmmss')}_${ticketId}.png`
  console.log(color.magenta(`Creating CODE128 barcode: ${filename}`))
  toBuffer({
    bcid: 'code128', 
    text: ticketId, 
    backgroundcolor: '#FFFFFF', 
    paddingheight: 10, 
    paddingwidth: 10
  }).then(buffer => {
    fs.writeFileSync(`./${filename}`, buffer)
  })
}  
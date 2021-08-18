const { recordId } = require('./definitions')
const { generateRandomTicketId: generateRandomTicketSerial } = require('./randomizer')
const { createBarcodeImage, ticketSerialToBarcodeData } = require('./barcode')

function serializedOivaMessageFromComponents(...components) {
  return ':' + components.join(';') + ';\r\n'
}

function serializedMoneyAmount(cents) {
  if (isNaN(cents) || 999_999_99 < cents || cents < -999_999_99) {
    throw new Error('invalid or unrepresentable monetary amount')
  }
  const formatted = Math.abs(cents / 100).toFixed(2)
  const sign = cents < 0 ? '-' : '+'
  return sign + formatted.padStart(9, '0')
}

function serializedMessage(message, useRandomTicketSerial, barcodeFile) {
  if (message.recordId === recordId.TotalOrReceivedKey) {
    return serializedOivaMessageFromComponents(
      message.recordId,
      message.transTime ?? '173803',
      serializedMoneyAmount(message.totalAmount),
      message.numTrans.toString().padStart(4, '0')
    )
  }

  const mainTicketSerial = useRandomTicketSerial ? generateRandomTicketSerial(message.gameType) : message.ticketSerial
  const shareTicketSerials = message.shareTicketSerials?.map(
    ticketSerial => useRandomTicketSerial ? generateRandomTicketSerial(message.gameType) : ticketSerial
  )
  const shareTicketIds = shareTicketSerials?.map(serial => ticketSerialToBarcodeData(serial, message.gameType))

  if (barcodeFile && (message.recordId === recordId.WagerSales || message.recordId === recordId.GroupBettingWagerFractionating)) {
    [mainTicketSerial].concat(shareTicketSerials ?? []).forEach(
      ticketSerial => createBarcodeImage(ticketSerial, message.gameType)
    )
  }

  return serializedOivaMessageFromComponents(
    message.recordId,
    message.transTime ?? '173803',
    message.gameType,
    message.gameIndex ?? '00',
    message.sideGameType ?? '00',
    message.sideGameIndex ?? '00',
    serializedMoneyAmount(message.transAmount),
    ticketSerialToBarcodeData(mainTicketSerial, message.gameType),
    shareTicketIds?.length?.toString() ?? '0',
    ...(shareTicketIds ?? [])
  )
}

module.exports = {
  serializedMessage
}

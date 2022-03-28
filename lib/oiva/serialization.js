const { recordId, gameIndex, sideGameIndex, sideGameType, gameType } = require('./definitions')
const { generateRandomTicketSerial, generateRandomTicketIdForCancelAndCashing } = require('./randomizer')
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

function serialize(message, mainTicketId, shareTicketIds) {
  if (message.gameType === gameType.Pahviarpa) {
    return serializedOivaMessageFromComponents(
      message.recordId,
      message.transTime ?? '173803',
      message.ticketId.substring(0, 3),
      message.recordId === recordId.InstantValidation
        ? serializedMoneyAmount(message.transAmount)
        : message.ticketId.substring(3, 10)
    )
  } else {
    return serializedOivaMessageFromComponents(
      message.recordId,
      message.transTime ?? '173803',
      message.gameType,
      gameIndex.NotInUse,
      message.sideGameType ?? sideGameType.NotInUse,
      sideGameIndex.NotInUse,
      serializedMoneyAmount(message.transAmount),
      mainTicketId,
      shareTicketIds?.length?.toString() ?? '0',
      ...(shareTicketIds ?? [])
    )
  }
}

function handleCancelAndValidationAndActivationMessage(message, useRandomTicketSerial, barcodeFile) {
  const ticketId = useRandomTicketSerial ? generateRandomTicketIdForCancelAndCashing(message.gameType) : message.ticketId
  if (barcodeFile) {
    createBarcodeImage(ticketId)
  }
  return serialize(message, ticketId)
}

function handleSalesMessage(message, useRandomTicketSerial, barcodeFile) {
  const mainTicketSerial = useRandomTicketSerial ? generateRandomTicketSerial(message.gameType) : message.ticketSerial
  const mainTicketId = ticketSerialToBarcodeData(mainTicketSerial, message.gameType)
  if (barcodeFile) {
    createBarcodeImage(mainTicketId, mainTicketSerial)
  }
  const shareTicketSerials = message.shareTicketSerials?.map(ticketSerial => useRandomTicketSerial ? generateRandomTicketSerial(message.gameType) : ticketSerial)
  const shareTicketIds = shareTicketSerials?.map(ticketSerial => {
    let ticketId = ticketSerialToBarcodeData(ticketSerial, message.gameType)
    if (barcodeFile) {
      createBarcodeImage(ticketId, ticketSerial)
    }
    return ticketId
  })
  return serialize(message, mainTicketId, shareTicketIds);
}

function serializedMessage(message, useRandomTicketId, barcodeFile) {
  switch (message.recordId) {
    case recordId.TotalOrReceivedKey:
      return serializedOivaMessageFromComponents(
        message.recordId,
        message.transTime ?? '173803',
        serializedMoneyAmount(message.totalAmount),
        message.numTrans.toString().padStart(4, '0')
      )
    case recordId.WagerSales:
    case recordId.GroupBettingWagerFractionating:
      return handleSalesMessage(message, useRandomTicketId, barcodeFile)
    case recordId.WagerCancellation:
    case recordId.WagerValidation:
    case recordId.InstantValidation:
    case recordId.InstantPackActivation:
      return handleCancelAndValidationAndActivationMessage(message, useRandomTicketId, barcodeFile)
    default:
      console.error(`Invalid recordId ${message.recordId}`)
  }
}

module.exports = {
  serializedMessage
}

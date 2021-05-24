const { recordId } = require('./definitions')

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

function serializedMessage(message) {
  if (message.recordId === recordId.TotalOrReceivedKey) {
    return serializedOivaMessageFromComponents(
      message.recordId,
      message.transTime ?? '173803',
      serializedMoneyAmount(message.totalAmount),
      message.numTrans.toString().padStart(4, '0')
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
    message.ticketId,
    message.shareTicketIds?.length?.toString() ?? '0',
    ...(message.shareTicketIds ?? [])
  )
}

module.exports = {
  serializedMessage
}

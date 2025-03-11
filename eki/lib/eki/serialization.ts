import { createBarcode } from "./barcode"
import { CustomerSessionEndMessage, GameType, GenericMessage, PROTOCOL_VERSION, RecId } from "./messages/messageTypes"
import { generateGenericTicketId, generateScratchcardTicketId } from "./messages/ticketId"
import { getTransTime, STATIC_TRANS_TIME } from "./messages/transTime"
import { createQrCode } from "./qrCode"

function serializedEkiMessageFromComponents(...components: any[]) {
  return ':' + components.join(';') + ';\r\n'
}

function serializedMoneyAmount(cents: number) {
  if (isNaN(cents) || 999_999_99 < cents || cents < -999_999_99) {
    throw new Error('invalid or unrepresentable monetary amount')
  }
  const sign = cents < 0 ? '' : '+'
  return sign + cents
}

function serialize(message: GenericMessage, staticData: boolean, ticketId: string, messageIndex?: number) {
    return serializedEkiMessageFromComponents(
      PROTOCOL_VERSION,
      message.recId,
      messageIndex && !staticData ? getTransTime(messageIndex) : message.transTime,
      message.gameType,
      serializedMoneyAmount(message.transAmount),
      ticketId,
      message.ean
    )
}

export function serializedGenericMessage(message: GenericMessage, staticData: boolean, barcode: boolean, messageIndex?: number) {
  const ticketId = staticData ? message.ticketId : message.gameType === GameType.Raaputusarpa && message.recId === RecId.Sell ? generateScratchcardTicketId() : generateGenericTicketId()
  switch (message.recId) {
    case RecId.Sell:
    case RecId.Cancel:
    case RecId.Cash:
      const serialized = serialize(message, staticData, ticketId, messageIndex)
        if (barcode) {
          if (message.gameType === GameType.Raaputusarpa && message.recId === RecId.Sell) {
            createBarcode(ticketId)
          } else {
            createQrCode(ticketId)
          }
        }
      return serialized
    case RecId.ScratchcardActivation:
      return serialize(message, staticData, ticketId, messageIndex)
    default:
      throw new Error(`Invalid recordId ${message.recId}`)
  }
}

export function serializedCustomerSessionEndMessage(message: CustomerSessionEndMessage, staticData: boolean) {
  return serializedEkiMessageFromComponents(
    PROTOCOL_VERSION,
    RecId.CustomerSessionEnd,
    staticData ? message.transTime : getTransTime(0),
    serializedMoneyAmount(message.sellAmount),
    serializedMoneyAmount(message.cancelAmount),
    serializedMoneyAmount(message.cashAmount),
    serializedMoneyAmount(message.totalAmount),
    message.numTrans
  )
}

export function serializedEmptyCustomerSessionEndMessage(staticData: boolean) {
  return serializedCustomerSessionEndMessage({transTime: STATIC_TRANS_TIME, sellAmount: 0, cancelAmount: 0, cashAmount: 0, totalAmount: 0, numTrans: 0}, staticData)
} 
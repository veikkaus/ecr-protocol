import { serializedCustomerSessionEndMessage, serializedGenericMessage } from "../serialization"
import { drawCancelMessages } from "./draws/drawCancel"
import { drawCashMessages } from "./draws/drawCash"
import { drawSellMessages } from "./draws/drawSell"
import { customerSessionEndMessage } from "./elite"
import { EkiGenericMessage, RecId } from "./messageTypes"
import { scratchcardActivationMessages } from "./scratchcard/scratchcardActivation"
import { scratchcardCancelMessages } from "./scratchcard/scratchcardCancel"
import { scratchcardCashMessages } from "./scratchcard/scratchcardCash"
import { scratchcardSellMessages } from "./scratchcard/scratchcardSell"
import { sportCancelMessages } from "./sport/sportCancel"
import { sportCashMessages } from "./sport/sportCash"
import { sportSellMessages } from "./sport/sportSell"
import { totoCancelMessages } from "./toto/totoCancel"
import { totoCashMessages } from "./toto/totoCash"
import { totoSellMessages } from "./toto/totoSell"

export function sellMessages() {
  return [
    ...drawSellMessages,
    ...totoSellMessages,
    ...sportSellMessages,
    ...scratchcardSellMessages
  ]
}

export function cancelMessages() {
  return [
    ...drawCancelMessages,
    ...totoCancelMessages,
    ...sportCancelMessages,
    ...scratchcardCancelMessages
  ]
}

export function cashMessages() {
  return [
    ...drawCashMessages,
    ...totoCashMessages,
    ...sportCashMessages,
    ...scratchcardCashMessages
  ]
}

export function ekiMessages() {
  return [
    ...sellMessages(),
    ...cancelMessages(),
    ...cashMessages(),
    ...scratchcardActivationMessages
  ]
}

export function getMessageString(names: string[], staticData: boolean, barcode: boolean): string {
  let messageString = ''
  const txMessages = selectMessages(names)
  let messageCount = txMessages.length

  const includesScratchcardActivationMessage = txMessages.some((message => message.payloadObject.recId === RecId.ScratchcardActivation))

  if (includesScratchcardActivationMessage) {
    if (messageCount > 1) {
      throw Error('The scratchcard activation message is sent individually, select only a single scratchcard activation message.')
    } else {
      return serializedGenericMessage(txMessages[0].payloadObject, staticData, false, messageCount)
    }
  }

  for (const message of txMessages) {
    if (message.payloadObject) {
      messageString = messageString + serializedGenericMessage(message.payloadObject, staticData, barcode, messageCount)
      messageCount--
    }
  }
  return messageString + serializedCustomerSessionEndMessage(customerSessionEndMessage(txMessages).payloadObject, staticData)
}

function selectMessages(names: string[]) {
  const msgs = ekiMessages()

  if (names.length === 0) {
    throw Error('Select messages')
  }

  return names.map((name) => {
    const match = findByName(msgs, name)
    if (!match) throw new Error(`Unknown message name: "${name}"`)
    return match
  })
}

function findByName(xs: EkiGenericMessage[], name: string) {
  return xs.find((x) => x.name === name)
}




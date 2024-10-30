import { EkiCustomerSessionEndMessage, EkiGenericMessage, RecId } from "../messageTypes"
import { STATIC_TRANS_TIME } from "../transTime"

export function customerSessionEndMessage(txMsgs: EkiGenericMessage[]): EkiCustomerSessionEndMessage  {
  return {
    name: 'customer-session-end-message',
    description:
      'Customer session end message',
    payloadObject: {
      transTime: STATIC_TRANS_TIME,
      sellAmount: txMsgs.filter(tx => tx.payloadObject.recId === RecId.Sell).reduce((acc, x) => {
        let sellAmount = x.payloadObject.transAmount
        return acc + sellAmount
      }, 0),
      cancelAmount: txMsgs.filter(tx => tx.payloadObject.recId === RecId.Cancel).reduce((acc, x) => {
        let cancelAmount = x.payloadObject.transAmount
        return acc + cancelAmount
      }, 0),
      cashAmount: txMsgs.filter(tx => tx.payloadObject.recId === RecId.Cash).reduce((acc, x) => {
        let cashAmount = x.payloadObject.transAmount
        return acc + cashAmount
      }, 0),
      totalAmount: txMsgs.reduce((acc, x) => {
        let transAmount = x.payloadObject.transAmount
        return acc + transAmount
      }, 0),
      numTrans: txMsgs.length
    }
  }
}
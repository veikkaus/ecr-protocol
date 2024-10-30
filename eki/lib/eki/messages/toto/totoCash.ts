import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const totoCashMessages: EkiGenericMessage[] = [
  {
    name: 'toto-cash-1',
    description: 'Toto cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'toto-cash-2',
    description: 'Toto cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'toto-cash-3',
    description: 'Toto cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]
import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const totoCancelMessages: EkiGenericMessage[] = [
  {
    name: 'toto-cancel-1',
    description: 'Toto wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'toto-cancel-2',
    description: 'Toto wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'toto-cancel-3',
    description: 'Toto wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]
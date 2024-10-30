import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const totoSellMessages: EkiGenericMessage[] = [
  {
    name: 'toto-sell-1',
    description: 'Toto wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'toto-sell-2',
    description: 'Toto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'toto-sell-3',
    description: 'Toto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Toto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]
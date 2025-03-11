import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const drawSellMessages: EkiGenericMessage[] = [
  {
    name: 'lotto-sell-1',
    description: 'Lotto wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Lotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'lotto-sell-2',
    description: 'Lotto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Lotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'lotto-sell-3',
    description: 'Lotto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Lotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'eurojackpot-sell-1',
    description: 'Eurojackpot wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Eurojackpot,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'eurojackpot-sell-2',
    description: 'Eurojackpot wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Eurojackpot,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'eurojackpot-sell-3',
    description: 'Eurojackpot wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Eurojackpot,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'keno-sell-1',
    description: 'Keno wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Keno,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'keno-sell-2',
    description: 'Keno wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Keno,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'keno-sell-3',
    description: 'Keno wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Keno,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'kaikki-tai-ei-mitaan-sell-1',
    description: 'Kaikki tai ei mitään wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.KaikkiTaiEiMitaan,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'kaikki-tai-ei-mitaan-sell-2',
    description: 'Kaikki tai ei mitään wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.KaikkiTaiEiMitaan,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'kaikki-tai-ei-mitaan-sell-3',
    description: 'Kaikki tai ei mitään wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.KaikkiTaiEiMitaan,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'synttarit-sell-1',
    description: 'Synttärit wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Synttarit,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'synttarit-sell-2',
    description: 'Synttärit wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Synttarit,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'synttarit-sell-3',
    description: 'Synttärit wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Synttarit,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'milli-sell-1',
    description: 'Milli wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Milli,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'milli-sell-2',
    description: 'Milli wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Milli,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'milli-sell-3',
    description: 'Milli wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Milli,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vikinglotto-sell-1',
    description: 'Vikinglotto wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Vikinglotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vikinglotto-sell-2',
    description: 'Vikinglotto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Vikinglotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vikinglotto-sell-3',
    description: 'Vikinglotto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Vikinglotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'jokeri-sell-1',
    description: 'Jokeri wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Jokeri,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'jokeri-sell-2',
    description: 'Jokeri wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Jokeri,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'jokeri-sell-3',
    description: 'Jokeri wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Jokeri,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'lomatonni-sell-1',
    description: 'Lomatonni wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Lomatonni,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'lomatonni-sell-2',
    description: 'Lomatonni wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Lomatonni,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'lomatonni-sell-3',
    description: 'Lomatonni wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Lomatonni,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]

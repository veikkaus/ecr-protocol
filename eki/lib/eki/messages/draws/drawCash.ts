import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const drawCashMessages: EkiGenericMessage[] = [
    {
      name: 'lotto-cash-1',
      description: 'Lotto cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Lotto,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'lotto-cash-2',
      description: 'Lotto cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Lotto,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'lotto-cash-3',
      description: 'Lotto cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Lotto,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'eurojackpot-cash-1',
      description: 'Eurojackpot cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Eurojackpot,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'eurojackpot-cash-2',
      description: 'Eurojackpot cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Eurojackpot,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'eurojackpot-cash-3',
      description: 'Eurojackpot cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Eurojackpot,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'keno-cash-1',
      description: 'Keno cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Keno,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'keno-cash-2',
      description: 'Keno cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Keno,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'keno-cash-3',
      description: 'Keno cash  3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Keno,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'kaikki-tai-ei-mitaan-cash-1',
      description: 'Kaikki tai ei mitään cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.KaikkiTaiEiMitaan,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'kaikki-tai-ei-mitaan-cash-2',
      description: 'Kaikki tai ei mitään cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.KaikkiTaiEiMitaan,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'kaikki-tai-ei-mitaan-cash-3',
      description: 'Kaikki tai ei mitään cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.KaikkiTaiEiMitaan,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'synttarit-cash-1',
      description: 'Synttärit cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Synttarit,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'synttarit-cash-2',
      description: 'Synttärit cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Synttarit,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'synttarit-cash-3',
      description: 'Synttärit cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Synttarit,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'milli-cash-1',
      description: 'Milli cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Milli,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'milli-cash-2',
      description: 'Milli cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Milli,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'milli-cash-3',
      description: 'Milli cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Milli,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'vikinglotto-cash-1',
      description: 'Vikinglotto cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Vikinglotto,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'vikinglotto-cash-2',
      description: 'Vikinglotto cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Vikinglotto,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'vikinglotto-cash-3',
      description: 'Vikinglotto cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Vikinglotto,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'jokeri-cash-1',
      description: 'Jokeri cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Jokeri,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'jokeri-cash-2',
      description: 'Jokeri cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Jokeri,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'jokeri-cash-3',
      description: 'Jokeri cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Jokeri,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'lomatonni-cash-1',
      description: 'Lomatonni cash 1',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Lomatonni,
        transTime: STATIC_TRANS_TIME,
        transAmount: -5_50,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'lomatonni-cash-2',
      description: 'Lomatonni cash 2',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Lomatonni,
        transTime: STATIC_TRANS_TIME,
        transAmount: -15_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    },
    {
      name: 'lomatonni-cash-3',
      description: 'Lomatonni cash 3',
      payloadObject: {
        recId: RecId.Cash,
        gameType: GameType.Lomatonni,
        transTime: STATIC_TRANS_TIME,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: ''
      }
    }
]

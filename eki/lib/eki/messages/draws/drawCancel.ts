import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const drawCancelMessages: EkiGenericMessage[] = [
  {
    name: 'lotto-cancel-1',
    description: 'Lotto wager cancellation 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Lotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'lotto-cancel-2',
    description: 'Lotto wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Lotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'lotto-cancel-3',
    description: 'Lotto wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Lotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'eurojackpot-cancel-1',
    description: 'Eurojackpot wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Eurojackpot,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'eurojackpot-cancel-2',
    description: 'Eurojackpot wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Eurojackpot,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'eurojackpot-cancel-3',
    description: 'Eurojackpot wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Eurojackpot,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'keno-cancel-1',
    description: 'Keno wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Keno,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'keno-cancel-2',
    description: 'Keno wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Keno,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'keno-cancel-3',
    description: 'Keno wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Keno,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'kaikki-tai-ei-mitaan-cancel-1',
    description: 'Kaikki tai ei mitään wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.KaikkiTaiEiMitaan,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'kaikki-tai-ei-mitaan-cancel-2',
    description: 'Kaikki tai ei mitään wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.KaikkiTaiEiMitaan,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'kaikki-tai-ei-mitaan-cancel-3',
    description: 'Kaikki tai ei mitään wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.KaikkiTaiEiMitaan,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'synttarit-cancel-1',
    description: 'Synttärit wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Synttarit,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'synttarit-cancel-2',
    description: 'Synttärit wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Synttarit,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'synttarit-cancel-3',
    description: 'Synttärit wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Synttarit,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'milli-cancel-1',
    description: 'Milli wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Milli,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'milli-cancel-2',
    description: 'Milli wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Milli,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'milli-cancel-3',
    description: 'Milli wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Milli,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'vikinglotto-cancel-1',
    description: 'Vikinglotto wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Vikinglotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'vikinglotto-cancel-2',
    description: 'Vikinglotto wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Vikinglotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'vikinglotto-cancel-3',
    description: 'Vikinglotto wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Vikinglotto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'jokeri-cancel-1',
    description: 'Jokeri wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Jokeri,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'jokeri-cancel-2',
    description: 'Jokeri wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Jokeri,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'jokeri-cancel-3',
    description: 'Jokeri wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Jokeri,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'lomatonni-cancel-1',
    description: 'Lomatonni wager cancellation 1',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Lomatonni,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'lomatonni-cancel-2',
    description: 'Lomatonni wager cancellation 2',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Lomatonni,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }, {
    name: 'lomatonni-cancel-3',
    description: 'Lomatonni wager cancellation 3',
    payloadObject: { 
      recId: RecId.Cancel,
      gameType: GameType.Lomatonni,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]

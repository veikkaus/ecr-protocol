import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const sportSellMessages: EkiGenericMessage[] = [
  {
    name: 'vakio-sell-1',
    description: 'Vakio wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vakio-sell-2',
    description: 'Vakio wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vakio-sell-3',
    description: 'Vakio wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-sell-1',
    description: 'Superkaksari wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-sell-2',
    description: 'Superkaksari wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-sell-3',
    description: 'Superkaksari wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-sell-1',
    description: 'Tulosveto wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-sell-2',
    description: 'Tulosveto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-sell-3',
    description: 'Tulosveto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-sell-1',
    description: 'Voittajaveto wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-sell-2',
    description: 'Voittajaveto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-sell-3',
    description: 'Voittajaveto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-sell-1',
    description: 'Moniveto wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-sell-2',
    description: 'Moniveto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-sell-3',
    description: 'Moniveto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-sell-1',
    description: 'Päivän pari wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-sell-2',
    description: 'Päivän pari wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-sell-3',
    description: 'Päivän pari wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-sell-1',
    description: 'Supertripla wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-sell-2',
    description: 'Supertripla wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-sell-3',
    description: 'Supertripla wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-sell-1',
    description: 'Päivän trio wager sale 1',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: 25,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-sell-2',
    description: 'Päivän trio wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-sell-3',
    description: 'Päivän trio wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-sell-1',
    description: 'Pitkäveto wager sale',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-sell-2',
    description: 'Pitkäveto wager sale 2',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-sell-3',
    description: 'Pitkäveto wager sale 3',
    payloadObject: {
      recId: RecId.Sell,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: 10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]

import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const sportCashMessages: EkiGenericMessage[] = [
  {
    name: 'vakio-cash-1',
    description: 'Vakio cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vakio-cash-2',
    description: 'Vakio cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vakio-cash-3',
    description: 'Vakio cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-cash-1',
    description: 'Superkaksari cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-cash-2',
    description: 'Superkaksari cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-cash-3',
    description: 'Superkaksari cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-cash-1',
    description: 'Tulosveto cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-cash-2',
    description: 'Tulosveto cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-cash-3',
    description: 'Tulosveto cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-cash-1',
    description: 'Voittajaveto cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-cash-2',
    description: 'Voittajaveto cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-cash-3',
    description: 'Voittajaveto cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-cash-1',
    description: 'Moniveto cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-cash-2',
    description: 'Moniveto cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-cash-3',
    description: 'Moniveto cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-cash-1',
    description: 'Päivän pari cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-cash-2',
    description: 'Päivän pari cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-cash-3',
    description: 'Päivän pari cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-cash-1',
    description: 'Supertripla cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-cash-2',
    description: 'Supertripla cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-cash-3',
    description: 'Supertripla cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cash-1',
    description: 'Päivän trio cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cash-2',
    description: 'Päivän trio cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cash-3',
    description: 'Päivän trio cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cash-4',
    description: 'Päivän trio cash 4',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -25,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-cash-1',
    description: 'Pitkäveto cash 1',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -5_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-cash-2',
    description: 'Pitkäveto cash 2',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -15_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-cash-3',
    description: 'Pitkäveto cash 3',
    payloadObject: {
      recId: RecId.Cash,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -50_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]

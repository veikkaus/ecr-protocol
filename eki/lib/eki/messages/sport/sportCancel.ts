import {EkiGenericMessage, GameType, RecId} from "../messageTypes"
import { STATIC_TICKET_ID } from "../ticketId"
import { STATIC_TRANS_TIME } from "../transTime"

export const sportCancelMessages: EkiGenericMessage[] = [
  {
    name: 'vakio-cancel-1',
    description: 'Vakio wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vakio-cancel-2',
    description: 'Vakio wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'vakio-cancel-3',
    description: 'Vakio wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Vakio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-cancel-1',
    description: 'Superkaksari wager cancel 1  ',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-cancel-2',
    description: 'Superkaksari wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'superkaksari-cancel-3',
    description: 'Superkaksari wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Superkaksari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-cancel-1',
    description: 'Tulosveto wager cancel',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-cancel-2',
    description: 'Tulosveto wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'tulosveto-cancel-3',
    description: 'Tulosveto wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Tulosveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-cancel-1',
    description: 'Voittajaveto wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-cancel-2',
    description: 'Voittajaveto wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'voittajaveto-cancel-3',
    description: 'Voittajaveto wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Voittajaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-cancel-1',
    description: 'Moniveto wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-cancel-2',
    description: 'Moniveto wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'moniveto-cancel-3',
    description: 'Moniveto wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Moniveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-cancel-1',
    description: 'Päivän pari wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-cancel-2',
    description: 'Päivän pari wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-pari-cancel-3',
    description: 'Päivän pari wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.PaivanPari,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-cancel-1',
    description: 'Supertripla wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-cancel-2',
    description: 'Supertripla wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'supertripla-cancel-3',
    description: 'Supertripla wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Supertripla,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cancel-1',
    description: 'Päivän trio wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -25,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cancel-2',
    description: 'Päivän trio wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'paivan-trio-cancel-3',
    description: 'Päivän trio wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.PaivanTrio,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-cancel-1',
    description: 'Pitkäveto wager cancel 1',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -1_03,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-cancel-2',
    description: 'Pitkäveto wager cancel 2',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -2_50,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  },
  {
    name: 'pitkaveto-cancel-3',
    description: 'Pitkäveto wager cancel 3',
    payloadObject: {
      recId: RecId.Cancel,
      gameType: GameType.Pitkaveto,
      transTime: STATIC_TRANS_TIME,
      transAmount: -10_00,
      ticketId: STATIC_TICKET_ID,
      ean: ''
    }
  }
]

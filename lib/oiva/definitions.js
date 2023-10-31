/**
 * Record type identifier.
 * Serialized length is always 2 characters.
 */
const recordId = {
  /** Sell wager ticket */
  WagerSales: '02',

  /** Cancel wager ticket */
  WagerCancellation: '03',

  /** Validate wager ticket: cash winnings, or issue refund */
  WagerValidation: '04',

  /** Sell wager ticket that is split into shares (fractions) */
  GroupBettingWagerFractionating: '05',

  /** Validate instant, protocol v1 */
  InstantValidation: '08',

  /** Activate instant pack */
  InstantPackActivation: '09',

  /** End customer session: empty shopping cart, transfer transactions to cash register */
  TotalOrReceivedKey: '10',

  /** docs/protocol.v2.md#identified-instant-messages */
  InstantSessionSummary: '11',
  InstantSell: '12',
  InstantCancel: '13',
  InstantValidationV2: '14' // NOTE: both identified and anonymous
}

/**
 * Game type identifier.
 * Serialized length is always 2 characters.
 */
const gameType = {
  Lotto: '01',
  Sport: '02',
  Score: '06',
  Winner: '07',
  MultiScore: '11',
  Ebet: '28',
  Pahviarpa: '16',
  KaikkiTaiEiMitaan: '30',
  Toto: '33'
}

/**
 * Game index identifier.
 * Serialized length is always 2 characters.
 */
const gameIndex = {
  NotInUse: '51'
}

/**
 * Side game type identifier.
 * Serialized length is always 2 characters.
 */
const sideGameType = {
  SaleJokeriIncluded: '07',
  SaleLomatonniIncluded: '08',
  SaleJokeriAndLomatonniIncluded: '09',
  NotInUse: '51'
}

/**
 * Side game index identifier.
 * Serialized length is always 2 characters.
 */
const sideGameIndex = {
  NotInUse: '51'
}

module.exports = {
  recordId,
  gameType,
  gameIndex,
  sideGameType,
  sideGameIndex
}

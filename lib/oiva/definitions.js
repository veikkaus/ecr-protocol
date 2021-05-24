
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

  /** End customer session: empty shopping cart, transfer transactions to cash register */
  TotalOrReceivedKey: '10',
}

/**
 * Game type identifier.
 * Serialized length is always 2 characters.
 */
const gameType = {
  Lotto: '01',
  KaikkiTaiEiMitaan: '30',
  Toto: '33'
}

/**
 * Game index identifier.
 * Serialized length is always 2 characters.
 */
const gameIndex = {
  lotto: {
    SaturdayLotto: '01'
  },
  allOrNothing: '01'
}

/**
 * Side game type identifier.
 * Serialized length is always 2 characters.
 */
const sideGameType = {
  /** With validation (cashing/refund), if Jokeri is included in original sell */
  ValidationJokeriIncluded: '04',

  /** With validation (cashing/refund), if Lomatonni is included in original sell */
  ValidationLomatonniIncluded: '05',

  /** With validation (cashing/refund), if both Jokeri and Lomatonni are included in original sell */
  ValidationJokeriAndLomatonniIncluded: '06'
}

/**
 * Side game index identifier.
 * Serialized length is always 2 characters.
 */
const sideGameIndex = {
  SaturdayJokeri: '01',
  SaturdayLomatonni: '04',
  JokeriAndLomatonni: '97'
}

module.exports = {
  recordId,
  gameType,
  gameIndex,
  sideGameType,
  sideGameIndex
}

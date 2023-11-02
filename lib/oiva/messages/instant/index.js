const oiva = require('../../definitions')
const { exampleCancelAndCashingTicketIds, nextTicketId } = require('../ids')

module.exports = {
  instantMessages,
  maybeInstantSessionSummary,

  testApi: () => ({ instantActivation, v2 })
}

function instantMessages(protocol) {
  return protocol === 2
    ? [ instantActivation, ...Object.values(v2) ]
    : [ instantActivation, ...v1 ]
}

const instantActivation = {
  name: 'instant-activation',
  description: 'Instant activation',
  payloadObject: {
    recordId: oiva.recordId.InstantPackActivation,
    gameType: oiva.gameType.Pahviarpa,
    ticketId: exampleCancelAndCashingTicketIds.instant
  }
}

const v1 = [
  {
    name: 'instant-validation',
    description: 'Instant validation',
    payloadObject: {
      recordId: oiva.recordId.InstantValidation,
      gameType: oiva.gameType.Pahviarpa,
      transAmount: 10_00,
      ticketId: exampleCancelAndCashingTicketIds.instant
    }
  },
]

const v2Names = {
  sessionSummary: 'instant-session-summary',
  sell: 'instant-sell',
  cancel: 'instant-cancel',
  validation: 'instant-validation-v2'
}
const v2Specs = {
  casino5: {
    name: 'casino5',
    ean: '6417326002061',
    amounts: {
      sell: 5_00,
      win: 10_00
    },
    gameNumber: 100 // "arpaerä" range 100-149
  },
  casino10: {
    name: 'casino10',
    ean: '6417326002122',
    amounts: {
      sell: 10_00,
      win: 20_00
    },
    gameNumber: 150 // "arpaerä" range 150-169
  },
}

const sessionId = '9010100152307001698762949140'
const transTime = '173803'

const v2 = {
  sellCasino5: sellMsg(v2Specs.casino5),
  sellCasino10: sellMsg(v2Specs.casino10),

  cancelCasino5: cancelMsg(v2Specs.casino5),
  cancelCasino10: cancelMsg(v2Specs.casino10),

  validationCasino5: validationMsg(v2Specs.casino5),
  validationCasino10: validationMsg(v2Specs.casino10),
}
function sellMsg(spec) {
  return {
    name: `${v2Names.sell}-${spec.name}`,
    description: 'Instant sell',
    payloadObject: {
      recordId: oiva.recordId.InstantSell,
      sessionId,
      transTime,
      instantEan: spec.ean,
      transAmount: spec.amounts.sell,
      instantId: instantId(spec.gameNumber)
    }
  }
}
function cancelMsg(spec) {
  return {
    name: `${v2Names.cancel}-${spec.name}`,
    description: 'Instant cancel',
    payloadObject: {
      recordId: oiva.recordId.InstantCancel,
      sessionId,
      transTime,
      instantEan: spec.ean,
      transAmount: -spec.amounts.sell,
      instantId: instantId(spec.gameNumber), // simulates cancel of corresponding sell in same session
      ticketId: nextTicketId()
    }
  }
}
function validationMsg(spec) {
  return {
    name: `${v2Names.validation}-${spec.name}`,
    description: 'Instant cash, both identified and anonymous',
    payloadObject: {
      recordId: oiva.recordId.InstantValidationV2,
      transTime,
      instantEan: spec.ean,
      transAmount: -spec.amounts.win,
      instantId: instantId(spec.gameNumber, 1), // simulates cash of corresponding sell in different session
      ticketId: nextTicketId()
    }
  }
}

function maybeInstantSessionSummary(msgs) {
  const sessionRecordIds = [oiva.recordId.InstantSell, oiva.recordId.InstantCancel]
  const candidates = msgs.filter(x => sessionRecordIds.includes(x.payloadObject.recordId))
  if (candidates.length === 0) return undefined
  return {
    name: v2Names.sessionSummary,
    description: 'Instant session summary',
    payloadObject: {
      recordId: oiva.recordId.InstantSessionSummary,
      transTime,
      numTrans: `${candidates.length}`.padStart(4, '0'),
      totalAmount: candidates.reduce((acc, x) => acc + x.payloadObject.transAmount, 0),
      sessionId
    }
  }
}

function instantId(
  gameNumber,
  ticketOffset = 0
) {
  const packId = `${`${gameNumber}`.padStart(4, '0')}001` // 7 digits
  const ticketNumber =  `${1 + ticketOffset}`.padStart(3, '0') // 3 digits
  
  // NOTE: virn+check semantics unknown
  const virn = '123456789' // 9 digits
  const check = '0' // 1 digit

  return `90100${gameNumber}${packId}${ticketNumber}${virn}${check}`
}

const oiva = require('../../definitions')
const { exampleCancelAndCashingTicketIds } = require('../ids')

module.exports = { instantMessages }

function instantMessages(protocol) {
  return protocol === 2
    ? [ ...protocolIndependent, ...v2 ]
    : [ ...protocolIndependent, ...v1 ]
}

const protocolIndependent = [
  {
    name: 'instant-activation',
    description: 'Instant activation',
    payloadObject: {
      recordId: oiva.recordId.InstantPackActivation,
      gameType: oiva.gameType.Pahviarpa,
      ticketId: exampleCancelAndCashingTicketIds.instant
    }
  }
]

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

const v2 = [] // TODO

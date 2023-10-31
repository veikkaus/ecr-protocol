const oiva = require('../../definitions')
const { exampleCancelAndCashingTicketIds } = require('../ids')

const instantMessages = [
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

module.exports = { instantMessages }
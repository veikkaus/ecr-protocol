const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const scoreMessages = [
  {
    name: 'score-wager',
    description: 'Score (Tulosveto) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Score,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.score
    }
  },
  {
    name: 'score-cashing',
    description: 'Cashing of winning Score wager',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Score,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.score
    }
  },
  {
    name: 'score-cancel',
    description: 'Cancellation of Score wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Score,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.score
    }
  }
]

module.exports = { scoreMessages }
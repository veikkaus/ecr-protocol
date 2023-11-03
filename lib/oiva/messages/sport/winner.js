const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const winnerMessages = [
  {
    name: 'winner-wager',
    description: 'Winner (Voittajaveto) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Winner,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.winner
    }
  },
  {
    name: 'winner-cashing',
    description: 'Cashing of winning Winner wager',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Winner,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.winner
    }
  },
  {
    name: 'winner-cancel',
    description: 'Cancellation of Winner wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Winner,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.winner
    }
  }
]

module.exports = { winnerMessages }
const oiva = require('../../definitions')
const {
  exampleTicketSerials,
  exampleCancelAndCashingTicketIds
} = require('../ids')

const milliMessages = [
  {
    name: 'milli-wager',
    description: 'Milli wager sale (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Milli,
      transAmount: 5_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'milli-cashing',
    description: 'Cashing of winning Milli wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Milli,
      transAmount: -134_80,
      ticketId: exampleCancelAndCashingTicketIds.draw
    }
  },
  {
    name: 'milli-cancel',
    description: 'Cancellation of Milli wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Milli,
      transAmount: -19_35,
      ticketId: exampleCancelAndCashingTicketIds.draw2
    }
  }
]

module.exports = { milliMessages }

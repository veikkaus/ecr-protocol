const oiva = require('../../definitions')
const {
  exampleTicketSerials,
  exampleCancelAndCashingTicketIds
} = require('../ids')

const millilottoMessages = [
  {
    name: 'millilotto-wager',
    description: 'Millilotto wager sale (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Millilotto,
      transAmount: 5_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'millilotto-cashing',
    description: 'Cashing of winning Millilotto wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Millilotto,
      transAmount: -134_80,
      ticketId: exampleCancelAndCashingTicketIds.draw
    }
  },
  {
    name: 'millilotto-cancel',
    description: 'Cancellation of Millilotto wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Millilotto,
      transAmount: -19_35,
      ticketId: exampleCancelAndCashingTicketIds.draw2
    }
  }
]

module.exports = { millilottoMessages }

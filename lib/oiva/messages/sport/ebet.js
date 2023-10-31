const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const ebetMessages = [
  {
    name: 'ebet-wager',
    description: 'Ebet (Pitkäveto) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Ebet,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.ebet
    }
  },
  {
    name: 'ebet-cashing',
    description: 'Cashing of winning Ebet wager',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Ebet,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.ebet
    }
  },
  {
    name: 'ebet-cancel',
    description: 'Cancellation of Ebet wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Ebet,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.ebet
    }
  }
]

module.exports = { ebetMessages }
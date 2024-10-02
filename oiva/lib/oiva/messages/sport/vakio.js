const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const vakioMessages = [
  {
    name: 'sport-wager',
    description: 'Sport (Vakio) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Sport,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.sport
    }
  },
  {
    name: 'sport-cashing',
    description: 'Cashing of winning Sport wager',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Sport,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.sport
    }
  },
  {
    name: 'sport-cancel',
    description: 'Cancellation of Sport wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Sport,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.sport
    }
  }
]

module.exports = { vakioMessages }
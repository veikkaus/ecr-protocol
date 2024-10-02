const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const multiscoreMessages = [
  {
    name: 'multiscore-wager',
    description: 'MultiScore (Moniveto) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.MultiScore,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.multiScore
    }
  },
  {
    name: 'multiscore-cashing',
    description: 'Cashing of winning MultiScore wager',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.MultiScore,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.multiScore
    }
  },
  {
    name: 'multiscore-cancel',
    description: 'Cancellation of MultiScore wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.MultiScore,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.multiScore
    }
  }
]

module.exports = { multiscoreMessages }
const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const totoMessages = [
  {
    name: 'toto-wager-cheap',
    description: 'Toto wager sale with low amount',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Toto,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.toto
    }
  },
  {
    name: 'toto-wager-expensive',
    description: 'Toto wager sale with high amount',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Toto,
      transAmount: 23_147_58,
      ticketSerial: exampleTicketSerials.toto
    }
  },
  {
    name: 'toto-wager-shares',
    description: 'Toto wager sale split into multiple shares',
    payloadObject: {
      recordId: oiva.recordId.GroupBettingWagerFractionating,
      gameType: oiva.gameType.Toto,
      transAmount: 15_00,
      ticketSerial: exampleTicketSerials.toto,
      shareTicketSerials: [
        exampleTicketSerials.toto2,
        exampleTicketSerials.toto3,
        exampleTicketSerials.toto4
      ]
    }
  },
  {
    name: 'toto-cashing',
    description: 'Cashing of winning Toto wager',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Toto,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.toto
    }
  },
  {
    name: 'toto-cancel',
    description: 'Cancellation of Toto wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Toto,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.toto2
    }
  }
]

module.exports = { totoMessages }
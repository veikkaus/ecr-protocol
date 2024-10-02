const oiva = require('../../definitions')
const { exampleTicketSerials } = require('../ids')

const aonMessages = [
  {
    name: 'aon-wager',
    description: 'All or Nothing (Kaikki tai ei mitään) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.KaikkiTaiEiMitaan,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  }
]

module.exports = { aonMessages }
const oiva = require('../../definitions')
const { exampleTicketSerials, exampleCancelAndCashingTicketIds } = require('../ids')

const lottoMessages = [
  {
    name: 'lotto-wager',
    description: 'Lotto wager sale (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-wager-shares',
    description: 'Lotto wager sale (no side games) split into multiple shares',
    payloadObject: {
      recordId: oiva.recordId.GroupBettingWagerFractionating,
      gameType: oiva.gameType.Lotto,
      transAmount: 10_00,
      ticketSerial: exampleTicketSerials.draw,
      shareTicketSerials: [
        exampleTicketSerials.draw2,
        exampleTicketSerials.draw3
      ]
    }
  },
  {
    name: 'lotto-wager-with-jokeri',
    description: 'Lotto wager sale, with Jokeri side game',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      sideGameType: oiva.sideGameType.SaleJokeriIncluded,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-wager-with-lomatonni',
    description: 'Lotto wager sale, with Lomatonni side game',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      sideGameType: oiva.sideGameType.SaleLomatonniIncluded,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-wager-with-jokeri-and-lomatonni',
    description: 'Lotto wager sale, with both Jokeri and Lomatonni side games',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      sideGameType: oiva.sideGameType.SaleJokeriAndLomatonniIncluded,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-wager-shares-with-jokeri',
    description:
      'Lotto wager sale split into multiple shares, with Jokeri side game',
    payloadObject: {
      recordId: oiva.recordId.GroupBettingWagerFractionating,
      gameType: oiva.gameType.Lotto,
      sideGameType: oiva.sideGameType.SaleJokeriIncluded,
      transAmount: 10_00,
      ticketSerial: exampleTicketSerials.draw,
      shareTicketSerials: [
        exampleTicketSerials.draw2,
        exampleTicketSerials.draw3
      ]
    }
  },
  {
    name: 'lotto-cashing',
    description: 'Cashing of winning Lotto wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.draw
    }
  },
  {
    name: 'lotto-cashing-with-jokeri',
    description: 'Cashing of winning Lotto wager, with Jokeri side game',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.draw2
    }
  },
  {
    name: 'lotto-cashing-with-lomatonni',
    description: 'Cashing of winning Lotto wager, with Lomatonni side game',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.draw3
    }
  },
  {
    name: 'lotto-cashing-with-jokeri-and-lomatonni',
    description:
      'Cashing of winning Lotto wager, with both Jokeri and Lomatonni side games',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      transAmount: -234_86,
      ticketId: exampleCancelAndCashingTicketIds.draw
    }
  },
  {
    name: 'lotto-cancel',
    description: 'Cancellation of Lotto wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Lotto,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.draw2
    }
  },
  {
    name: 'lotto-cancel-with-jokeri',
    description: 'Cancellation of Lotto wager, with Jokeri side game',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Lotto,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.draw3
    }
  },
  {
    name: 'lotto-cancel-with-lomatonni',
    description: 'Cancellation of Lotto wager, with Lomatonni side game',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Lotto,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.draw
    }
  },
  {
    name: 'lotto-cancel-with-jokeri-and-lomatonni',
    description:
      'Cancellation of Lotto wager, with both Jokeri and Lomatonni side game',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Lotto,
      transAmount: -29_05,
      ticketId: exampleCancelAndCashingTicketIds.draw2
    }
  },

]

module.exports = { lottoMessages }
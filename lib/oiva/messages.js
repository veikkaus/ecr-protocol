const fzf = require('node-fzf')
const oiva = require('./definitions')

const exampleTicketSerials = {
  toto: 'A-AAAA-BBBB-CCCC',
  toto2: 'A-AAAA-BBBB-CCCD',
  toto3: 'A-AAAA-BBBB-CCDD',
  toto4: 'A-AAAA-BBBB-CDDD',
  draw: '1234-111111111-083366',
  draw2: '1234-111111112-083366',
  draw3: '1234-111111122-083366',
}

const oivaMessages = [
  // ------------------------------------------------------------
  // Toto
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
        exampleTicketSerials.toto4,
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
      ticketSerial: exampleTicketSerials.toto
    }
  },
  {
    name: 'toto-cancel',
    description: 'Cancellation of Toto wager',
    payloadObject: {
      recordId: oiva.recordId.WagerCancellation,
      gameType: oiva.gameType.Toto,
      transAmount: -29_05,
      ticketSerial: exampleTicketSerials.toto
    }
  },
  // ------------------------------------------------------------
  // Lotto
  {
    name: 'lotto-wager',
    description: 'Lotto wager sale (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
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
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw,
      shareTicketSerials: [
        exampleTicketSerials.draw2,
        exampleTicketSerials.draw3,
      ]
    }
  },
  {
    name: 'lotto-wager-with-jokeri',
    description: 'Lotto wager sale, with Jokeri side game',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      sideGameIndex: oiva.sideGameIndex.SaturdayJokeri,
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
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      sideGameIndex: oiva.sideGameIndex.SaturdayLomatonni,
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
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      sideGameIndex: oiva.sideGameIndex.JokeriAndLomatonni,
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-cashing',
    description: 'Cashing of winning Lotto wager (no side games)',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      transAmount: -234_86,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-cashing-with-jokeri',
    description: 'Cashing of winning Lotto wager, with Jokeri side game',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      sideGameType: oiva.sideGameType.ValidationJokeriIncluded,
      sideGameIndex: oiva.sideGameIndex.SaturdayJokeri,
      transAmount: -234_86,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-cashing-with-lomatonni',
    description: 'Cashing of winning Lotto wager, with Lomatonni side game',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      sideGameType: oiva.sideGameType.ValidationLomatonniIncluded,
      sideGameIndex: oiva.sideGameIndex.SaturdayLomatonni,
      transAmount: -234_86,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  {
    name: 'lotto-cashing-with-jokeri-and-lomatonni',
    description: 'Cashing of winning Lotto wager, with both Jokeri and Lomatonni side games',
    payloadObject: {
      recordId: oiva.recordId.WagerValidation,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      sideGameType: oiva.sideGameType.ValidationJokeriAndLomatonniIncluded,
      sideGameIndex: oiva.sideGameIndex.JokeriAndLomatonni,
      transAmount: -234_86,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  // ------------------------------------------------------------
  // All or Nothing (Kaikki tai ei mitään)
  {
    name: 'aon-wager',
    description: 'All or Nothing (Kaikki tai ei mitään) wager sale',
    payloadObject: {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.KaikkiTaiEiMitaan,
      gameIndex: '01',
      transAmount: 1_03,
      ticketSerial: exampleTicketSerials.draw
    }
  },
  // ------------------------------------------------------------
  // Other
  {
    name: 'total',
    description: 'Report total; i.e. empty shopping cart; i.e. end session and transfer transactions to cash register',
    payloadObject: {
      recordId: oiva.recordId.TotalOrReceivedKey,
      totalAmount: 123_45,
      numTrans: 3
    }
  },
]

function oivaMessageByName(name) {
  return oivaMessages.find(m => m.name === name)
}

async function pickOivaMessagesInteractively() {
  console.log('Select Oiva message to send (use arrow keys, or type to search; select with return)')
  const separator = ' — '
  const result = await fzf({
    list: oivaMessages.map(m => m.name + separator + m.description)
  })
  console.log()
  const selectedName = result.selected.value.split(separator)[0]
  const selectedMessage = oivaMessageByName(selectedName)
  return [selectedMessage]
}

async function resolveOivaMessages(messageNames) {
  if (messageNames.length === 0) {
    return pickOivaMessagesInteractively()
  }
  return messageNames.map(name => {
    const match = oivaMessageByName(name)
    if (!match) {
      throw new Error(`Unknown message name: "${name}"`)
    }
    return match
  })
}

function oivaCalculatedTotalMessage(messages) {
  const totalMessage = {...oivaMessageByName('total')}
  totalMessage.payloadObject.numTrans = messages.length
  totalMessage.payloadObject.totalAmount = messages.reduce((total, m) => total + (m.payloadObject.transAmount ?? 0), 0)
  return totalMessage
}

module.exports = {
  oivaMessages,
  resolveOivaMessages,
  oivaCalculatedTotalMessage
}

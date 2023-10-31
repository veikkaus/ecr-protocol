const oiva = require('../../definitions')

const eliteMessages = [
  {
    name: 'total',
    description:
      'Report total; i.e. empty shopping cart; i.e. end session and transfer transactions to cash register',
    payloadObject: {
      recordId: oiva.recordId.TotalOrReceivedKey,
      totalAmount: 123_45,
      numTrans: 3
    }
  }
]

module.exports = { eliteMessages }
const oiva = require('../../definitions')

module.exports = { totalMessage }

function totalMessage(txMsgs = []) {
  return {
    name: 'total',
    description:
      'Report total, specify this explicitly only if you want to test total without other transactions, ' +
      'otherwise it will be generated automatically',
    payloadObject: {
      recordId: oiva.recordId.TotalOrReceivedKey,
      totalAmount: txMsgs.reduce((acc, x) => {
        let transAmount = x.payloadObject?.transAmount
        if (isNaN(transAmount)) {
          // NOTE: keep in sync with tappi, as of 2023-11-02 instant-activation is calculated into numTrans even if it doesn't affect totalAmount
          if (x.name === 'instant-activation') {
            transAmount = 0
          } else throw new Error(`non-transaction message encountered when calculating total: ${JSON.stringify(x)}`)
        }
        return acc + transAmount
      }, 0),
      numTrans: txMsgs.length
    }
  }
}

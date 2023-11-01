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
        const transAmount = x.payloadObject.transAmount
        if (isNaN(transAmount)) { 
          throw new Error(`non-transaction message encountered when calculating total: ${JSON.stringify(x)}`)
        }
        return acc + transAmount
      }, 0),
      numTrans: txMsgs.length
    }
  }
}

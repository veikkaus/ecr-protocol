const { maybeInstantSessionSummary, testApi: instantMsgTestApi } = require('../instant')
const { totalMessage } = require('./index')

describe('elite messages', () => {
  describe('total', () => {
    const { instantActivation, v2 } = instantMsgTestApi()

    test.each([
      ['empty', [], 0, 0],
      ['sell', [v2.sellCasino5], 1, 5_00],
      ['cancel', [v2.cancelCasino5], 1, -5_00],
      ['validation', [v2.validationCasino5], 1, -10_00],
      ['sell + cancel + validation', [v2.sellCasino10, v2.cancelCasino5, v2.validationCasino10], 3, -15_00],
      ['activation', [instantActivation], 1, 0],
    ])('%s', (_, txs, expectedNumTrans, expectedTotalAmount) => {
      const actual = totalMessage(txs)
      expect(actual.payloadObject.numTrans).toEqual(expectedNumTrans)
      expect(actual.payloadObject.totalAmount).toEqual(expectedTotalAmount)
    })

    test.each([
      ['unknown', { foo: 'bar' }],
      ['total', totalMessage()],
      ['session summary', maybeInstantSessionSummary([v2.sellCasino5])],
      ['missing transAmount', { ...v2.sellCasino5, payloadObject: { ...v2.sellCasino5.payloadObject, transAmount: undefined } }],
      ['missing payloadObject', {...v2.sellCasino5, payloadObject: undefined }],
    ])('throws for non-tx: %s', (_, nonTx) => {
      expect(() => totalMessage([nonTx])).toThrow(`non-transaction message encountered when calculating total: ${JSON.stringify(nonTx)}`)
    })
  })
})
const { maybeInstantSessionSummary, testApi } = require('./index')

describe('instant messages', () => {
  const { v2 } = testApi()

  describe('session summary', () => {
    test.each([
      ['sell', [v2.sellCasino5], '0001', 5_00],
      ['cancel', [v2.cancelCasino5], '0001', -5_00],
      ['sell + cancel', [v2.sellCasino5, v2.cancelCasino5], '0002', 0],
      ['sell + sell', [v2.sellCasino5, v2.sellCasino10], '0002', 15_00],
      ['sell + sell + validation', [v2.sellCasino5, v2.sellCasino10, v2.validationCasino5], '0002', 15_00],
      ['sell + sell + cancel', [v2.sellCasino5, v2.sellCasino10, v2.cancelCasino5], '0003', 10_00]
    ])('%s', (_, msgs, expectedNumTrans, expectedTotalAmount) => {
      const actual = maybeInstantSessionSummary(msgs)
      expect(actual.payloadObject.numTrans).toEqual(expectedNumTrans)
      expect(actual.payloadObject.totalAmount).toEqual(expectedTotalAmount)
    })

    it('only sell and cancel are taken into account', () => {
      expect(maybeInstantSessionSummary([v2.validationCasino5])).toBeUndefined()
      expect(maybeInstantSessionSummary([maybeInstantSessionSummary([v2.sellCasino5])])).toBeUndefined()
      expect(maybeInstantSessionSummary([])).toBeUndefined()
    })
  })
})
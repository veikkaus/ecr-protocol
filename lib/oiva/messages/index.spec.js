const { testApi: instantMsgTestApi, maybeInstantSessionSummary } = require('./instant')
const { oivaMessages, resolveOivaMessages } = require('./index')
const { totalMessage } = require('./elite')

describe('Example messages', () => {
  const fractionMessageTestCases = oivaMessages(1)
    .filter(messageObject => messageObject.payloadObject.shareTicketSerials?.length > 0)
    .map(messageObject => [messageObject.name, messageObject])

  test.each(fractionMessageTestCases)(
    'fraction message "%s" transAmount should be divisible by number of fractions', (_, { payloadObject }) => {
      expect(payloadObject.transAmount % payloadObject.shareTicketSerials.length).toEqual(0)
    })

  describe('resolveOivaMessages', () => {
    const { v2 } = instantMsgTestApi()
    const expectTotal = (xs, numTrans, totalAmount) => { 
      const total = xs.find(x => x.name === 'total')
      expect(total.payloadObject.numTrans).toEqual(numTrans)
      expect(total.payloadObject.totalAmount).toEqual(totalAmount)
    }

    test.each(Object.values(v2).map(x => x.name))('not found, protocol 1: %s', async (name) => {
      await expect(resolveOivaMessages([name], { protocol: 1 })).rejects.toThrowError(`Unknown message name: "${name}"`)
    })
    
    it('not found, protocol 2', async () => {
      const name = 'instant-validation'
      await expect(resolveOivaMessages([name], { protocol: 2 })).rejects.toThrowError(`Unknown message name: "${name}"`)
    })
    
    describe('total', () => {
      it('protocol 1', async () => {
        const names = ['instant-activation', 'instant-validation']
        const actual = await resolveOivaMessages(names, { protocol: 1, total: true })
        expect(actual.map(x => x.name)).toEqual([...names, 'total'])
        expectTotal(actual, 2, -10_00)          
      })
      it('protocol 2', async () => {
        const names = ['instant-activation', v2.validationCasino10.name]
        const actual = await resolveOivaMessages(names, { protocol: 2, total: true })
        expect(actual.map(x => x.name)).toEqual([...names, 'total'])
        expectTotal(actual, 2, -20_00)
      })

      it('protocol 2, with instant session summary', async () => {
        const txs = [v2.sellCasino5, v2.sellCasino10]
        const summary = maybeInstantSessionSummary(txs)

        const names = txs.map(x => x.name)
        const actual = await resolveOivaMessages(names, { protocol: 2, total: true })
        expect(actual.map(x => x.name)).toEqual([...names, summary.name, 'total'])
        expectTotal(actual, 2, 15_00)
      })
    })

    describe('total, suppressed by option', () => {
      it('protocol 1', async () => {
        const names = ['instant-activation', 'instant-validation']
        const actual = await resolveOivaMessages(names, { protocol: 1 /* no total here */ })
        expect(actual.map(x => x.name)).toEqual(names)
      })

      it('protocol 2', async () => {
        const names = ['instant-activation', v2.validationCasino10.name]
        const actual = await resolveOivaMessages(names, { protocol: 2 /* no total here */ })
        expect(actual.map(x => x.name)).toEqual(names)  
      })

      it('protocol 2, with instant session summary', async () => {
        const txs = [v2.sellCasino5, v2.sellCasino10]
        const summary = maybeInstantSessionSummary(txs)

        const names = txs.map(x => x.name)
        const actual = await resolveOivaMessages(names, { protocol: 2 /* no total here */ })
        expect(actual.map(x => x.name)).toEqual([...names, summary.name])  
      })
    })

    describe('total, explicit', () => {
      it('solo', async () => {
        // NOTE: total option has no effect

        let actual = await resolveOivaMessages(['total'], { total: true })
        expect(actual).toEqual([totalMessage()])

        actual = await resolveOivaMessages(['total'], {})
        expect(actual).toEqual([totalMessage()])
      })

      it('with txs', async () => {
        const txs = [v2.sellCasino5, v2.sellCasino10]
        const summary = maybeInstantSessionSummary(txs)

        const names = txs.map(x => x.name)
        const actual = await resolveOivaMessages([...names, 'total'], { protocol: 2, total: true })
        expect(actual.map(x => x.name)).toEqual([...names, summary.name, 'total'])
        expectTotal(actual, 2, 15_00)
      })

      it('with txs, suppressed by option', async () => {
        const txs = [v2.sellCasino5, v2.sellCasino10]
        const summary = maybeInstantSessionSummary(txs)

        const names = txs.map(x => x.name)
        const actual = await resolveOivaMessages([...names, 'total'], { protocol: 2 /* no total here */ })
        expect(actual.map(x => x.name)).toEqual([...names, summary.name])
      })
    })
  })
})
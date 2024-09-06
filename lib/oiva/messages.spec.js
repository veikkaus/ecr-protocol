const { oivaMessages } = require('./messages')

describe('Example messages', () => {
  const fractionMessageTestCases = oivaMessages
    .filter(messageObject => messageObject.payloadObject.shareTicketSerials?.length > 0)
    .map(messageObject => [messageObject.name, messageObject])

  test.each(fractionMessageTestCases)(
    'fraction message "%s" transAmount should be divisible by number of fractions', (_, { payloadObject }) => {
      expect(payloadObject.transAmount % payloadObject.shareTicketSerials.length).toEqual(0)
    })
})
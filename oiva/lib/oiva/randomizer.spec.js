const { expect, test, it, describe } = require('@jest/globals')
const { generateRandomTicketSerial, generateRandomTicketIdForCancelAndCashing } = require('./randomizer')
const { gameType } = require('./definitions')

describe('randomizer', () => {

  test.each([
    [gameType.Toto, /^[ABCDEF0123456789-]{16}$/],
    [gameType.Lotto, /^[0-9-]{21}$/]
  ])('should generate random ticket serial for game type %s', (gameType, expectedRegex) => {
    expect(generateRandomTicketSerial(gameType)).toMatch(expectedRegex)
  })

  test.each([
    [gameType.Toto, /^(0[0-9]{17}66)$/],
    [gameType.Lotto, /^(0[0-9]{17}66)$/],
    [gameType.Pahviarpa, /^(111[0-9]{7}001)$/]
  ])('should generate random ticket id for cancel and cashing for game type %s', (gameType, expectedRegex) => {
    expect(generateRandomTicketIdForCancelAndCashing(gameType)).toMatch(expectedRegex)
  })

})
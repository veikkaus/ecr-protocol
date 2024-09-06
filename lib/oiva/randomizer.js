const { gameType } = require('./definitions')

const totoTicketSerialChars = 'ABCDEF0123456789'
const numbers = '0123456789'

function generateString(characters, length) {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function generateRandomTicketSerial(type) {
  if (type === gameType.Toto) {
    return `A-AAAA-BBBB-${generateString(totoTicketSerialChars, 4)}`
  }
  return `1234-111111111-${generateString(numbers, 4)}66`
}

function generateRandomTicketIdForCancelAndCashing(type) {
  switch (type) {
    case gameType.Toto:
      return `000000000${generateString(numbers, 5)}000066`
    case gameType.Lotto:
    case gameType.KaikkiTaiEiMitaan:
      return `01234111111111${generateString(numbers, 4)}66`
    case gameType.Pahviarpa:
      return `111${generateString(numbers, 7)}001`
  }
}

module.exports = {
  generateRandomTicketSerial,
  generateRandomTicketIdForCancelAndCashing,
}
const { gameType } = require('./definitions')

const totoTicketIdChars = 'ABCDEF0123456789'
const lottoTicketIdChars = '0123456789'

function generateString(characters, length) {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function generateRandomTicketId(type) {
  if (type === gameType.Toto) {
    return `A-AAAA-BBBB-${generateString(totoTicketIdChars, 4)}`
  }
  return `1234-111111111-${generateString(lottoTicketIdChars, 4)}66`
}

module.exports = {
  generateRandomTicketId
}
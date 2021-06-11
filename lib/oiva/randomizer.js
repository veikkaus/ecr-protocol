const { gameType } = require('./definitions')

const totoTicketIdPrefix = 'A-AAAA-BBBB-'
const totoTicketIdChars = 'ABCDEF0123456789'
const lottoTicketIdPrefix = '1234-111111111-08'
const lottoTicketIdChars = '0123456789'

function generateString(characters) {
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomTicketId(type) {
    if (type === gameType.Toto) {
        return `${totoTicketIdPrefix}${generateString(totoTicketIdChars)}`;
    }
    return `${lottoTicketIdPrefix}${generateString(lottoTicketIdChars)}`;
}

module.exports = {
    generateRandomTicketId
}
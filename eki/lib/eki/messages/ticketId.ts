export const STATIC_TICKET_ID = '9019901234567890123456789ABCDEFABCDABCDEFABCD01345'
export const STATIC_SCRATCHCARD_TICKET_ID = '9010012345678901234567890123'

const hexDecChars = '0123456789ABCDEF'
const numbers = '0123456789'

export function generateGenericTicketId() {
  return `90199${generateString(hexDecChars, 45)}`
}

export function generateScratchcardTicketId() {
  return `90100${generateString(numbers, 23)}`
}

function generateString(characters: string, length: number) {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
const fzf = require('node-fzf')
const oiva = require('../definitions')
const { aonMessages, lottoMessages } = require('./draw')
const { eliteMessages } = require('./elite')
const { instantMessages } = require('./instant')
const { 
  ebetMessages,
  multiscoreMessages,
  scoreMessages,
  vakioMessages,
  winnerMessages
} = require('./sport')
const { totoMessages } = require('./toto')

const oivaMessages = [
  ...totoMessages,
  ...lottoMessages,
  ...aonMessages,
  ...ebetMessages,
  ...scoreMessages,
  ...multiscoreMessages,
  ...vakioMessages,
  ...winnerMessages,
  ...instantMessages,
  ...eliteMessages
]

module.exports = {
  oivaMessages,
  resolveOivaMessages,
  oivaCalculatedTotalMessage
}

function oivaMessageByName(name) {
  return oivaMessages.find((m) => m.name === name)
}

async function pickOivaMessagesInteractively() {
  console.log(
    'Select Oiva message to send (use arrow keys, or type to search; select with return)'
  )
  const separator = ' — '
  const result = await fzf({
    mode: 'normal',
    list: oivaMessages.map((m) => m.name + separator + m.description)
  })
  console.log()
  const selectedName = result.selected.value.split(separator)[0]
  const selectedMessage = oivaMessageByName(selectedName)
  return [selectedMessage]
}

async function resolveOivaMessages(messageNames) {
  if (messageNames.length === 0) {
    return pickOivaMessagesInteractively()
  }
  return messageNames.map((name) => {
    const match = oivaMessageByName(name)
    if (!match) {
      throw new Error(`Unknown message name: "${name}"`)
    }
    return match
  })
}

function oivaCalculatedTotalMessage(messages) {
  const totalMessage = { ...oivaMessageByName('total') }
  totalMessage.payloadObject.numTrans = messages.length
  totalMessage.payloadObject.totalAmount = messages.reduce(
    (total, m) => total + (m.payloadObject.transAmount ?? 0),
    0
  )
  return totalMessage
}

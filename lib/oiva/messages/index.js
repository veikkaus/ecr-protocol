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

module.exports = {
  oivaMessages,
  resolveOivaMessages,
  oivaCalculatedTotalMessage
}

function oivaMessages(protocol) { 
  return  [
    ...totoMessages,
    ...lottoMessages,
    ...aonMessages,
    ...ebetMessages,
    ...scoreMessages,
    ...multiscoreMessages,
    ...vakioMessages,
    ...winnerMessages,
    ...instantMessages(protocol),
    ...eliteMessages
  ]
}

async function resolveOivaMessages(messageNames, protocol) {
  const msgs = oivaMessages(protocol)

  if (messageNames.length === 0) {
    return pickOivaMessagesInteractively(msgs)
  }
  return messageNames.map((name) => {
    const match = oivaMessageByName(msgs, name)
    if (!match) {
      throw new Error(`Unknown message name: "${name}"`)
    }
    return match
  })
}

function oivaCalculatedTotalMessage(messages) {
  const totalMessage = { ...oivaMessageByName(messages, 'total') }
  totalMessage.payloadObject.numTrans = messages.length
  totalMessage.payloadObject.totalAmount = messages.reduce(
    (total, m) => total + (m.payloadObject.transAmount ?? 0),
    0
  )
  return totalMessage
}

function oivaMessageByName(msgs, name) {
  return msgs.find((m) => m.name === name)
}

async function pickOivaMessagesInteractively(msgs) {
  console.log(
    'Select Oiva message to send (use arrow keys, or type to search; select with return)'
  )
  const separator = ' — '
  const result = await fzf({
    mode: 'normal',
    list: msgs.map((m) => m.name + separator + m.description)
  })
  console.log()
  const selectedName = result.selected.value.split(separator)[0]
  const selectedMessage = oivaMessageByName(msgs, selectedName)
  return [selectedMessage]
}

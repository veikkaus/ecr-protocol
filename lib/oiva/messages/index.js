const fzf = require('node-fzf')
const oiva = require('../definitions')
const { aonMessages, lottoMessages } = require('./draw')
const { totalMessage } = require('./elite')
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
  withTotal
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
    totalMessage
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

function withTotal(selectedMsgs) {
  // if total message is among selected messages, reuse it in order to avoid sending multiple totals
  const maybeTotal = oivaMessageByName(selectedMsgs, 'total')
  const msgs = maybeTotal === undefined ? selectedMsgs : selectedMsgs.filter(x => x.name !== 'total')
  const msg = maybeTotal === undefined ? totalMessage : maybeTotal

  msg.payloadObject.numTrans = msgs.length
  msg.payloadObject.totalAmount = msgs.reduce(
    (acc, m) => acc + (m.payloadObject.transAmount ?? 0),
    0
  )
  return [...msgs, msg]
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

const fzf = require('node-fzf')
const { aonMessages, lottoMessages, milliMessages } = require('./draw')
const { totalMessage } = require('./elite')
const { instantMessages, maybeInstantSessionSummary } = require('./instant')
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
  resolveOivaMessages
}

function oivaMessages(protocol) {
  return [
    ...totoMessages,
    ...lottoMessages,
    ...milliMessages,
    ...aonMessages,
    ...ebetMessages,
    ...scoreMessages,
    ...multiscoreMessages,
    ...vakioMessages,
    ...winnerMessages,
    ...instantMessages(protocol),
    totalMessage()
  ]
}

// type Options = {
//   protocol: 1 | 2
//   total?: true
// }
async function resolveOivaMessages(names, options) {
  let selected = await selectMessages(names, options.protocol)
  if (selected.length === 0) return []

  // explicit total message makes sense only if it's the only one
  const total = findByName(selected, 'total')
  if (total) {
    if (selected.length === 1) return [total]
    else {
      console.log(
        'Explicit total message ignored' +
          (options.total === true
            ? ', it will be calculated from other transactions'
            : '')
      )
      selected = selected.filter((x) => x.name !== 'total')
    }
  }

  const sessionSummary = maybeInstantSessionSummary(selected)

  const resolved = [...selected]
  if (sessionSummary) resolved.push(sessionSummary)
  if (options.total === true) resolved.push(totalMessage(selected))
  return resolved
}

async function selectMessages(names, protocol) {
  const msgs = oivaMessages(protocol)

  if (names.length === 0) return pickOivaMessagesInteractively(msgs)

  return names.map((name) => {
    const match = findByName(msgs, name)
    if (!match) throw new Error(`Unknown message name: "${name}"`)
    return match
  })
}

async function pickOivaMessagesInteractively(msgs) {
  console.log(
    'Select Oiva message to send (use arrow keys, or type to search; select with return)'
  )
  const separator = ' — '
  const result = await fzf({
    mode: 'normal',
    list: msgs.map((x) => x.name + separator + x.description)
  })
  console.log()

  if (!result.selected) {
    console.log('No message selected')
    return []
  }

  const selectedName = result.selected.value.split(separator)[0]
  return [findByName(msgs, selectedName)]
}

function findByName(xs, name) {
  return xs.find((x) => x.name === name)
}

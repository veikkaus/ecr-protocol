import { Command, Option } from 'commander'
import { SerialPort } from 'serialport'
import { color } from './lib/colors'
import { dataPresentation, openSerialport, writeAndDrainToSerialPort } from './lib/eki/serialport'
import { cancelMessages, cashMessages, ekiMessages, getMessageString, sellMessages } from './lib/eki/messages'
import fs from 'fs'
import { serializedGenericMessage } from './lib/eki/serialization'
import { timeout } from './lib/time'
import { STATIC_TRANS_TIME } from './lib/eki/messages/transTime'
import { EkiGenericMessage } from './lib/eki/messages/messageTypes'
import { scratchcardActivationMessages } from './lib/eki/messages/scratchcard/scratchcardActivation'

interface Config {
  path: string
}
const jsonString = fs.readFileSync('./config.json', 'utf-8');
const data: Config = JSON.parse(jsonString)

const program = new Command()

program
  .description('Test utility for Veikkaus Elite-S betting terminal’s transaction interface for cash registers')

program
  .command('list-ports')
  .description('List available serial ports')
  .action(async () => {
    console.dir(await SerialPort.list())
  })

  program
  .command('list-all-messages')
  .description('List available test messages')
  .action(async () => {
    printMessages(ekiMessages())
  })

  program
  .command('list-sell-messages')
  .description('List available sell messages')
  .action(async () => {
    printMessages((sellMessages()))
  })

  program
  .command('list-cancel-messages')
  .description('List available cancel messages')
  .action(async () => {
    printMessages((cancelMessages()))
  })

  program
  .command('list-cash-messages')
  .description('List available cash messages')
  .action(async () => {
    printMessages((cashMessages()))
  })

  program
  .command('list-scratchcard-activation-messages')
  .description('List available scratchcard activation messages')
  .action(async () => {
    printMessages((scratchcardActivationMessages))
  })

  program
  .command('send')
  .description('Send message(s) to serial port')
  .argument('[messageNames...]', 'The names of the messages to send (see the `list-messages` command). ' +
    'If omitted, the user will be prompted to interactively select a message.')
  .addOption(new Option('-p, --path [PATH]', 'The path of the target serial port (see the `list-ports` command)' ))
  .addOption(new Option('-s, --static-data', `Static TransTime (${STATIC_TRANS_TIME}) and TicketId in all messages` ))
  .addOption(new Option('-b, --barcode', 'Create QR-code or barcode PNG file for sell, cancel and cash message(s)'))
  .action(async (messageNames, options) => {
    const messages = getMessageString(messageNames, options.staticData ?? false, options.barcode ?? false)

    const serialPort = await openSerialport(options.path ?? data.path)

    await writeAndDrainToSerialPort(messages, serialPort)
    
    console.log(`SENT: ${color.green(dataPresentation(messages))}`)
    
    // Wait a while to ensure (OS) buffers are drained.
    // https://github.com/serialport/node-serialport/issues/1024#issuecomment-315635545
    //
    await timeout(500)

    serialPort.close()
  })

  function printMessages(m: EkiGenericMessage[]) {
      const messages = m.map(m => ({
        name: m.name,
        description: m.description,
        payload: serializedGenericMessage(m.payloadObject, true, false, 1)
      }))
      messages.forEach(message => {
        console.log([
          color.blue(message.name),
          message.description,
          color.green(dataPresentation(message.payload)),
          ''
        ].join('\n'))
      })
  }

program.parse(process.argv)

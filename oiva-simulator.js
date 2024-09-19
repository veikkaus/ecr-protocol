#!/usr/bin/env node

const { SerialPort } = require('serialport')
const { program, Option } = require('commander')
const { openSerialPort, waitForLoopbackData, dataPresentation } = require('./lib/oiva/serial-port')
const { oivaMessages, resolveOivaMessages } = require('./lib/oiva/messages')
const { serializedMessage } = require('./lib/oiva/serialization')
const { blue, green } = require('./lib/colors')
const { timeout } = require('./lib/time')

const optionProtocol2 = new Option('-2', 'Use protocol version 2').default(false)
const protocol = (options) => options['2'] ? 2 : 1 

program
  .description('Test utility for Veikkaus Elite-S betting terminal’s transaction interface for cash registers')

program
  .command('list-ports')
  .description('List available serial ports')
  .action(async () => {
    console.dir(await SerialPort.list())
  })

program
  .command('list-messages')
  .description('List available test messages')
  .addOption(optionProtocol2)
  .addOption(
    new Option('-f, --format [format]', 'Output format')
      .choices(['readable', 'json'])
      .default('readable')
  )
  .action(async options => {
    const messages = oivaMessages(protocol(options)).map(m => ({
      name: m.name,
      description: m.description,
      payload: serializedMessage(m.payloadObject)
    }))

    switch (options.format) {
      case 'json':
        console.log(JSON.stringify(messages, undefined, 2))
        break
      case 'readable':
        messages.forEach(message => {
          console.log([
            blue(message.name),
            message.description,
            green(dataPresentation(message.payload)),
            ''
          ].join('\n'))
        })
        break
    }
  })

program
  .command('send')
  .description('Send message(s) to serial port')
  .argument('<path>', 'The path of the target serial port (see the `list-ports` command)')
  .argument('[messageNames...]', 'The names of the messages to send (see the `list-messages` command). ' +
    'If omitted, the user will be prompted to interactively select a message.')
  .addOption(optionProtocol2)
  .option(
    '-r, --random-ticket-id',
    'Generate random ticket id (and share ticket ids if defined) for the message(s)'
  )
  .option(
    '-b, --barcode-file',
    'Create barcode PNG file for sell message(s)'
  )
  .option(
    '-l, --loopback',
    'Listen for the sent message on the same (loopback) interface and print it out when received'
  )
  .option(
    '-t, --no-total',
    'Omit the automatically calculated "total" message sent after the specified messages'
  )
  .action(async (path, messageNames, options) => {
    const messages = await resolveOivaMessages(
      messageNames,
      {
        protocol: protocol(options),
        total: options.total
      }
    ).catch(error => {
      console.error(error.toString())
      process.exit(1)
    })

    const serialPort = await openSerialPort(path)

    for (const message of messages) {
      const serializedMessageString = serializedMessage(message.payloadObject, options.randomTicketId, options.barcodeFile)
      await serialPort.writeAsync(serializedMessageString)
      await serialPort.drainAsync()

      console.log(`SENT: ${green(dataPresentation(serializedMessageString))}`)

      if (options.loopback) {
        await waitForLoopbackData(serialPort, serializedMessageString)
      }
    }

    // Wait a while to ensure (OS) buffers are drained.
    // https://github.com/serialport/node-serialport/issues/1024#issuecomment-315635545
    //
    await timeout(500)

    serialPort.close()
  })

program.parse(process.argv)

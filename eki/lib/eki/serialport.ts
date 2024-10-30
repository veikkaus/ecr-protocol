import { SerialPort } from 'serialport'

export function openSerialport(path: string): Promise<SerialPort> {
  return new Promise((resolve, reject) => {
    const serialPort = new SerialPort({ path: path, baudRate: 19200, dataBits: 8, parity: 'none', stopBits: 1 }, error => {
      console.log(`Opened serialport ${path} ${error ?? ''}`)
      error ? reject(error) : resolve(serialPort)
    })
    serialPort.on('error', err => {
      console.log(`general error: ${JSON.stringify(err)})`, serialPort)
    })
  })
}

export function dataPresentation(data?: string) {
  return data ? data.toString().replaceAll('\r\n', '\\r\\n') : ''
}

export function writeAndDrainToSerialPort(message: string, serialPort: SerialPort): Promise<void> {
  return new Promise((resolve, reject) => {
    serialPort.write(message, writeError => {
      if (writeError) {
        console.log(`write - writeError (${JSON.stringify(writeError)}: ${message}`, serialPort)
        reject(writeError)
      }
    })
    serialPort.drain(drainError => {
      if (drainError) {
        console.log(`drain - error (${JSON.stringify(drainError)}): ${message}`, serialPort)
        reject(drainError)
      } else {
        resolve()
      }
    })
  })
}

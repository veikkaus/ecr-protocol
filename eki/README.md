# EKI v3 simulator

Test utility for Veikkaus Elite-S betting terminal’s transaction interface for cash registers.

## Prerequisites

* **Node.js:** [Version v20.17.0](https://nodejs.org/) (You can check your version with `node -v`)
* **NPM:** [Version 10.8.2](https://www.npmjs.com/) (Usually installed with Node.js, check with `npm -v`)

## Installation
`npm install`

## Usage

### Configuration

Create a config.json file in the root directory of the project with the following content:

`
{
  "path": "<serial-port-path>"
}
`

Replace `<serial-port-path>` with the actual path of your serial port. You can find the available serial ports by running the following command:

`npm start list-ports`


### Commands

#### List available test messages
`npm start list-all-messages`

#### List available sell messages
`npm start list-sell-messages`

#### List available cancel messages
`npm start list-cancel-messages`

#### List available cash messages
`npm start list-cash-messages`

#### List available scratchcard activation messages
`npm start list-scratchcard-activation-messages`

#### Send message(s) to serial port
`npm start send <messageName1> <messageName2> ...`

### Options:

- -p, --path <PATH>: The path of the target serial port. If omitted, the path specified in the config.json file will be used.
- -s, --static-data: Use static TransTime and TicketId in all messages.
- -b, --barcode: Create QR-code or barcode PNG file for sell, cancel and cash message(s).

### Examples:

#### Send a single message:
`npm start send scratchcard-euro-sell`

#### Send multiple messages:
`npm start send scratchcard-sell-lotto-1 scratchcard-euro-cash`

#### Send messages with static data:
`npm start send scratchcard-sell-lotto-1 scratchcard-euro-cash -- -s`

#### Send messages and create barcodes:
`npm start send scratchcard-sell-lotto-1 scratchcard-euro-cash -- -b`

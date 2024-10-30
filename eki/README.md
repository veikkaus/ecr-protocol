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

`npm run list-ports`


### Commands

#### List available test messages
`npm run list-all-messages`

#### List available sell messages
`npm run list-sell-messages`

#### List available cancel messages
`npm run list-cancel-messages`

#### List available cash messages
`npm run list-cash-messages`

#### List available scratchcard activation messages
`npm run list-scratchcard-activation-messages`

#### Send message(s) to serial port
`npm run send <messageName1> <messageName2> ...`

### Options:

- -p, --path <PATH>: The path of the target serial port. If omitted, the path specified in the config.json file will be used.
- -s, --static-data: Use static TransTime and TicketId in all messages.
- -q, --qr-code: Create QR-code PNG file for sell, cancel and cash message(s).

### Examples:

#### Send a single message:
`npm run send scratchcard-euro-sell`

#### Send multiple messages:
`npm run send scratchcard-sell-lotto-1 scratchcard-euro-cash`

#### Send messages with static data:
`npm run send scratchcard-sell-lotto-1 scratchcard-euro-cash -- -s`

#### Send messages and create QR-codes:
`npm run send scratchcard-sell-lotto-1 scratchcard-euro-cash -- -q`

# EKI v3 - Elite cash register integration 

## Intended audience
Cash register system providers / developers.

## Introduction
This document describes how to connect Veikkaus’ Elite-S betting terminal to a retailer’s cash register. The data link between the betting terminal and the cash register is used to synchronize betting transactions between Veikkaus’ gaming systems and the retailers POS systems without manual actions on the cash register. It is thus intended to reduce discrepancies between Veikkaus invoicing and the retailers bookkeeping. Veikkaus’ Elite-S betting terminal will provide the betting transaction interface described in this document.

## Asynchronous Serial Communication between Terminal and Cash Register
Asynchronous serial communication is used for the transmission of data. The Elite-S terminal comes equipped with serial ports complying with the RS-232 standard. There is no multipoint capability for a single connection.

### Cables
DE-9 cables are used for data transfer.
Serial port connectors mounted on terminal are male. Most serial port connectors mounted on cash registers are also male.  
Veikkaus´ Elite-S betting terminal connector is type D-9 female. PC end connector is usually D-9 female for serial port. Signal wires must ‘cross connected’.

Cable connections are:  
D-9 D9  
2 3  
3 2  
4 4  
5 5  
6 6

### Communication Protocol
The betting terminal transmits messages that the cash register reads. Messages from the terminal do not need to be acknowledged.  
- Messages are ASCII strings  
- Messages start with a colon character (`:`)  
- Fields within the message are separated by semicolon characters (`;`)  
- Messages are terminated by carriage return and line feed characters (`\r\n`)  
Connection configuration in asynchronous mode (a serial port parameter setting):  
19200/8-N-1  
- Baud rate: 19200 bps  
- eight (8) data bits  
- no (N) parity bit  
- one (1) stop bit

## Message Structures
Each message sent by the terminal follows the structure described in the previous chapter. This chapter specifies the fields included in different kinds of messages, as well as their formats and allowed values. The fields are listed in the order in which they appear in the messages.  
To see some examples of serialized messages, please refer to the messages included in the _EKI simulator_.

### Versioning
The first information in the message line is the version number. If the version number is something other than what the integrating system processes or it is not a version number, that line should not be processed.

New  Record type identifiers (RecId) can be added to the protocol. If the integrating system does not know the RecId, the system should not process the messages.

Version number only increases for breaking changes to previously published RecId messages.

### Common Formats

#### TicketId

Length 28-50 alphanumeric.  

##### Wager or scratchcard sales
Starts with 90100 (scratchcard) or 90199 (game ticket). Prefix should not be used to identify game type, but instead use the GameType 16 for scratch cards and other GameTypes for specific games.  
Example: `9010012345678901234567890123` or `90199AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`

##### Redeem or cancel ticket
Is the unique serial number of redeem or cancellation receipt. Starts 90199 (game ticket). Length 50 alphanumeric. 
Example: `90199BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB`

#### Timestamps

Times are given in the format `HHmmss` (hours, minutes, seconds).  
Example: `170957` for 17:09:57. That is: nine minutes and 57 seconds past five p.m.

#### Currency Amounts

Monetary amounts are formatted:  
- amount in euro cents  
- with a leading sign (+ for sales, - for cashing and cancellations)  
Example: `+103456` for 1034,56 €. That is: One thousand 34 euros 56 cents.

### Wager or scratchcards sales, cashing, cancellations and scratchcard activations

- **Version** (length: 3) — Protocol version  
- `v03`: EKI v3  
-  **RecId** (length: 2) — Record type identifier  
- `02`: Sell  
- `03`: Cancel  
- `04`: Cash  
- `09`: Scratchcard activation — Can be used to track scratch card activations in sales location, _sent immediately after activation and is not counted as part of "_**End Session and Transfer Transactions to Cash Register**_" message._  
-  **TransTime**  (length: 6) — Transaction time (Common Formats: Timestamps)  
- **GameType**  (length: 2) — Game type identifier (Field Values: Game Types)  
- **TransAmount**  (length: max 10) — Transaction amount (Common Formats: Currency Amounts)  
-  **TicketId** (length: 28-50) — Ticket or receipt serial number (Common Formats: TicketId)
-  **EAN** (length: 0 or 13) — Scratchcard EAN _(only in scratchcards, otherwise empty)_

### Emptying Shopping Cart (“End Session and Transfer Transactions to Cash Register”)

-  **Version** (length: 3) — Protocol version  
- `v03`: EKI v3  
- **RecId** (length: 2) — Record type identifier  
- `10`: Customer session end  
- **TransTime**  (length: 6) — Transaction time (Common Formats: Timestamps)  
- **SellAmount** (length: max 10) — Total sell amount (Common Formats: Currency Amounts)  
- **CancelAmount**  (length: max 10) — Total cancel amount (Common Formats: Currency Amounts)  
- **CashAmount**  (length: max 10) — Total cash amount (Common Formats: Currency Amounts)  
- **TotalAmount**  (length: max 10) — Total amount "balance" (Common Formats: Currency Amounts)  
- **NumTrans**  (length: max 4) — Number of transactions

### Example customer session

All messages in the same customer session are sent  at once when salesperson taps "Next customer" button. Customer session always ends with RecId 10 message containing total amounts of customer session.

1.  Lotto sell (1 €)
2.  Pitkäveto sell (15 €)
3.  Lotto cancel (1 €)
4.  Eurojackpot cash (5 €)
5.  Scratchcard (Casino 10 €) sell
6.  Scratchcard (Casino 10 €) cancel

    :v03;02;123327;01;+100;90199AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA;;\r\n  
    :v03;02;123328;28;+1500;90199BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB;;\r\n  
    :v03;03;123329;01;-100;90199CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC;;\r\n  
    :v03;04;123329;22;-500;90199DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD;;\r\n  
    :v03;02;123330;16;+1000;9010012345678901234567890123;6417326002122;\r\n  
    :v03;03;123331;16;-1000;90199EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE;6417326002122;\r\n  
    :v03;10;123332;+2600;-1100;-500;+1000;6;\r\n

If customer session only contains non monetary transactions, customer session always ens with RecId 10 message with 0 transactions.
    :v03;10;073840;+0;+0;+0;+0;0;

### Field Values

#### Game Types (Updated: 11.3.2025)

New GameTypes can be added as the product range increases. New GameTypes are communicated to partners in advance. The integrating system must be able to handle GameTypes 00-99.  
  
GameType range 00-99


| GameType | Product                 |
|----------|-------------------------|
| 00       | Unknown type or no type |
| 01       | Lotto                   |
| 02       | Vakio                   |
| 04       | Jokeri                  |
| 05       | Superkaksari            |
| 06       | Tulosveto               |
| 07       | Voittajaveto            |
| 11       | Moniveto                |
| 13       | Päivän pari             |
| 14       | Supertripla             |
| 15       | Päivän trio             |
| 16       | Raaputusarpa            |
| 18       | Keno                    |
| 22       | Eurojackpot             |
| 27       | Lomatonni               |
| 28       | Pitkäveto               |
| 30       | Kaikki tai ei mitään    |
| 31       | Synttärit               |
| 33       | Toto                    |
| 34       | Vikinglotto             |
| 35       | Milli                   |
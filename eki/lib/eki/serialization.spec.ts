import { expect, it, describe } from '@jest/globals'
import {
  serializedGenericMessage,
  serializedCustomerSessionEndMessage,
  serializedEmptyCustomerSessionEndMessage,
} from './serialization'
import {
  CustomerSessionEndMessage,
  GameType,
  GenericMessage,
  RecId,
  ScratchcardEAN,
} from './messages/messageTypes'
import { STATIC_TRANS_TIME } from './messages/transTime'
import { STATIC_SCRATCHCARD_TICKET_ID, STATIC_TICKET_ID } from './messages/ticketId'
import { sportSellMessages } from './messages/sport/sportSell'
import { sportCancelMessages } from './messages/sport/sportCancel'
import { sportCashMessages } from './messages/sport/sportCash'

describe('serialization', () => {
  describe('serialized generic message', () => {
    it('should serialize a sell message correctly', () => {
      const message = {
        recId: RecId.Sell,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Lotto,
        transAmount: 100_00,
        ticketId: STATIC_TICKET_ID,
        ean: '',
      }
      const expected =
        ':v03;02;120103;01;+10000;9019901234567890123456789ABCDEFABCDABCDEFABCD01345;;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })

    it('should serialize a scratchcard sell message correctly', () => {
      const message = {
        recId: RecId.Sell,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Raaputusarpa,
        transAmount: 4_00,
        ticketId: STATIC_SCRATCHCARD_TICKET_ID,
        ean: ScratchcardEAN.Assa_4E,
      }
      const expected =
        ':v03;02;120103;16;+400;9010012345678901234567890123;6417326002054;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })

    it('should serialize a cancel message correctly', () => {
      const message: GenericMessage = {
        recId: RecId.Cancel,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Eurojackpot,
        transAmount: -50_00,
        ticketId: STATIC_TICKET_ID,
        ean: '',
      }
      const expected =
        ':v03;03;120103;22;-5000;9019901234567890123456789ABCDEFABCDABCDEFABCD01345;;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })

    it('should serialize a scratchcard cancel message correctly', () => {
      const message = {
        recId: RecId.Cancel,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Raaputusarpa,
        transAmount: -4_00,
        ticketId: STATIC_SCRATCHCARD_TICKET_ID,
        ean: ScratchcardEAN.Assa_4E,
      };
      const expected =
        ':v03;03;120103;16;-400;9010012345678901234567890123;6417326002054;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })

    it('should serialize a cash message correctly', () => {
      const message: GenericMessage = {
        recId: RecId.Cash,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Lotto,
        transAmount: 200_00,
        ticketId: STATIC_TICKET_ID,
        ean: '',
      }
      const expected =
        ':v03;04;120103;01;+20000;9019901234567890123456789ABCDEFABCDABCDEFABCD01345;;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })

    it('should serialize a scratchcard cash message correctly', () => {
      const message = {
        recId: RecId.Cash,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Raaputusarpa,
        transAmount: -4_00,
        ticketId: STATIC_SCRATCHCARD_TICKET_ID,
        ean: ScratchcardEAN.Assa_4E,
      }
      const expected =
        ':v03;04;120103;16;-400;9010012345678901234567890123;6417326002054;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })

    it('should throw an error for an invalid record ID', () => {
      const message: any = {
        recId: 999,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Vakio,
        transAmount: 100_00,
        ticketId: '1234567890',
        ean: '6417326000000',
      }
      expect(() =>
        serializedGenericMessage(message, true, false)
      ).toThrowError('Invalid recordId 999')
    })
  })

  describe('serialized scratchcard activation message', () => {
    it('should serialize a scratchcard activation message correctly', () => {
      const message: GenericMessage = {
        recId: RecId.ScratchcardActivation,
        transTime: STATIC_TRANS_TIME,
        gameType: GameType.Raaputusarpa,
        transAmount: 100_00,
        ticketId: STATIC_SCRATCHCARD_TICKET_ID,
        ean: ScratchcardEAN.Euro_1E,
      }
      const expected =
        ':v03;09;120103;16;+10000;9010012345678901234567890123;6417326002009;\r\n'
      expect(serializedGenericMessage(message, true, false)).toBe(expected)
    })
  })

  describe('serialized customer session end message', () => {
    it('should serialize a customer session end message correctly', () => {
      const message: CustomerSessionEndMessage = {
        transTime: STATIC_TRANS_TIME,
        sellAmount: 1000_00,
        cancelAmount: -200_00,
        cashAmount: 800_00,
        totalAmount: 800_00,
        numTrans: 3,
      }
      const expected =
        ':v03;10;120103;+100000;-20000;+80000;+80000;3;\r\n'
      expect(serializedCustomerSessionEndMessage(message, true)).toBe(expected)
    })

    it('should serialize a empty customer session end message correctly', () => {
      const expected = ':v03;10;120103;+0;+0;+0;+0;0;\r\n'
      expect(serializedEmptyCustomerSessionEndMessage(true)).toBe(expected)
    })
  })

  describe('custom amount tests', () => {
    it('should serialize sport sell message with amount under 1 euro correctly', () => {
      const messageToTest = sportSellMessages.find(message => message.name === 'paivan-trio-sell-1')
      expect(messageToTest).toBeDefined()
      const expected =
        ':v03;02;120103;15;+25;9019901234567890123456789ABCDEFABCDABCDEFABCD01345;;\r\n'
      const actual = serializedGenericMessage(messageToTest!.payloadObject, true, false)
      expect(actual).toBe(expected)
    })

    it('should serialize sport cancel message with amount under 1 euro correctly', () => {
      const messageToTest = sportCancelMessages.find(message => message.name === 'paivan-trio-cancel-1')
      expect(messageToTest).toBeDefined()
      const expected =
        ':v03;03;120103;15;-25;9019901234567890123456789ABCDEFABCDABCDEFABCD01345;;\r\n'
      const actual = serializedGenericMessage(messageToTest!.payloadObject, true, false)
      expect(actual).toBe(expected)
    })

    it('should serialize sport cash message with amount under 1 euro correctly', () => {
      const messageToTest = sportCashMessages.find(message => message.name === 'paivan-trio-cash-1')
      expect(messageToTest).toBeDefined()
      const expected =
        ':v03;04;120103;15;-25;9019901234567890123456789ABCDEFABCDABCDEFABCD01345;;\r\n'
      const actual = serializedGenericMessage(messageToTest!.payloadObject, true, false)
      expect(actual).toBe(expected)
    })
  })
})

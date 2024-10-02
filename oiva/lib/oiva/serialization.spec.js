const { expect, test, it, describe } = require('@jest/globals')
const { serializedMessage } = require('./serialization')
const oiva = require('./definitions')
const { maybeInstantSessionSummary, testApi: instantMsgTestApi } = require('./messages/instant')

describe('Oiva serialization', () => {
  test.each([
    [
      'wager',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Lotto,
        transAmount: 1_03,
        ticketSerial: '1234-111111111-083366'
      },
      ':02;173803;01;51;51;51;+000001.03;01234111111111083366;0;\r\n'
    ],
    [
      'wager, explicit time',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Lotto,
        transAmount: 1_03,
        ticketSerial: '1234-111111111-083366',
        transTime: '111213'
      },
      ':02;111213;01;51;51;51;+000001.03;01234111111111083366;0;\r\n'
    ],
    [
      'wager with shares',
      {
        recordId: oiva.recordId.GroupBettingWagerFractionating,
        gameType: oiva.gameType.Toto,
        transAmount: 15_00,
        ticketSerial: 'A-AAAA-BBBB-CCCC',
        shareTicketSerials: [
          'A-AAAA-BBBB-CCCD',
          'A-AAAA-BBBB-CCDD',
          'A-AAAA-BBBB-CDDD'
        ]
      },
      ':05;173803;33;51;51;51;+000015.00;104369048059524288;3;104369048059524295;104369048059524455;104369048059527012;\r\n'
    ],
    [
      'wager with side games',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Lotto,
        sideGameType: oiva.sideGameType.SaleJokeriAndLomatonniIncluded,
        transAmount: 1_03,
        ticketSerial: '1234-111111111-083366'
      },
      ':02;173803;01;51;09;51;+000001.03;01234111111111083366;0;\r\n'
    ],
    [
      'wager with shares and side games',
      {
        recordId: oiva.recordId.GroupBettingWagerFractionating,
        gameType: oiva.gameType.Lotto,
        sideGameType: oiva.sideGameType.SaleJokeriIncluded,
        transAmount: 1_03,
        ticketSerial: '1234-111111111-083366',
        shareTicketSerials: ['1234-111111112-083366', '1234-111111122-083366']
      },
      ':05;173803;01;51;07;51;+000001.03;01234111111111083366;2;01234111111112083366;01234111111122083366;\r\n'
    ],
    [
      'cashing, with side games',
      {
        recordId: oiva.recordId.WagerValidation,
        gameType: oiva.gameType.Lotto,
        transAmount: -234_86,
        ticketId: '01234111111111083366'
      },
      ':04;173803;01;51;51;51;-000234.86;01234111111111083366;0;\r\n'
    ],
    [
      'cancel',
      {
        recordId: oiva.recordId.WagerCancellation,
        gameType: oiva.gameType.Lotto,
        transAmount: -234_86,
        ticketId: '01234111111111083366'
      },
      ':03;173803;01;51;51;51;-000234.86;01234111111111083366;0;\r\n'
    ],
    [
      'wager, sport game',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Ebet,
        transAmount: 1_03,
        ticketSerial: '1803-052320004-177366'
      },
      ':02;173803;28;51;51;51;+000001.03;01803052320004177366;0;\r\n'
    ],
    [
      'cancel, sport game',
      {
        recordId: oiva.recordId.WagerCancellation,
        gameType: oiva.gameType.Ebet,
        transAmount: -234_86,
        ticketId: '01803052320004177366'
      },
      ':03;173803;28;51;51;51;-000234.86;01803052320004177366;0;\r\n'
    ],

    [
      'instant validation',
      {
        recordId: oiva.recordId.InstantValidation,
        gameType: oiva.gameType.Pahviarpa,
        transAmount: -234_86,
        ticketId: '1111234567123'
      },
      ':08;173803;111;-000234.86;\r\n'
    ],
    [
      'instant activation',
      {
        recordId: oiva.recordId.InstantPackActivation,
        gameType: oiva.gameType.Pahviarpa,
        ticketId: '1111234567123'
      },
      ':09;173803;111;1234567;\r\n'
    ],
    [
      'total',
      {
        recordId: oiva.recordId.TotalOrReceivedKey,
        totalAmount: 123_45,
        numTrans: 3
      },
      ':10;173803;+000123.45;0003;\r\n'
    ]
  ])(
    'should correctly serialize message: %s',
    (_, messageObject, expectedSerialization) => {
      expect(serializedMessage(messageObject, false, false)).toEqual(
        expectedSerialization
      )
    }
  )

  describe('instant messages v2', () => {
    const { v2 } = instantMsgTestApi()

    it('sell', () => {
      expect(serializedMessage(v2.sellCasino5.payloadObject))
        .toEqual(':12;9010100152307001698762949140;173803;6417326002061;+000005.00;9010010001000010011234567890;\r\n')

      expect(serializedMessage(v2.sellCasino10.payloadObject))
        .toEqual(':12;9010100152307001698762949140;173803;6417326002122;+000010.00;9010015001500010011234567890;\r\n')
    })

    it('cancel', () => {
      expect(serializedMessage(v2.cancelCasino5.payloadObject))
        .toEqual(':13;9010100152307001698762949140;173803;6417326002061;-000005.00;9010010001000010011234567890;00000000000001000066;\r\n')

      expect(serializedMessage(v2.cancelCasino10.payloadObject))
        .toEqual(':13;9010100152307001698762949140;173803;6417326002122;-000010.00;9010015001500010011234567890;00000000000002000066;\r\n')
    })

    it('validation', () => {
      expect(serializedMessage(v2.validationCasino5.payloadObject))
        .toEqual(':14;173803;6417326002061;-000010.00;9010010001000010021234567890;00000000000003000066;\r\n')

      expect(serializedMessage(v2.validationCasino10.payloadObject))
        .toEqual(':14;173803;6417326002122;-000020.00;9010015001500010021234567890;00000000000004000066;\r\n')
    })

    it('session summary', () => {
      expect(serializedMessage(maybeInstantSessionSummary([v2.sellCasino5]).payloadObject))
        .toEqual(':11;173803;0001;+000005.00;9010100152307001698762949140;\r\n')

      expect(serializedMessage(maybeInstantSessionSummary([v2.cancelCasino5]).payloadObject))
        .toEqual(':11;173803;0001;-000005.00;9010100152307001698762949140;\r\n')

      expect(serializedMessage(maybeInstantSessionSummary([v2.sellCasino5, v2.sellCasino10]).payloadObject))
        .toEqual(':11;173803;0002;+000015.00;9010100152307001698762949140;\r\n')

      expect(serializedMessage(maybeInstantSessionSummary([v2.sellCasino5, v2.sellCasino10, v2.cancelCasino5]).payloadObject))
        .toEqual(':11;173803;0003;+000010.00;9010100152307001698762949140;\r\n')
    })
  }) 

  function serializedMoney(cents) {
    return serializedMessage(
      {
        recordId: oiva.recordId.TotalOrReceivedKey,
        totalAmount: cents,
        numTrans: 1
      },
      false,
      false
    ).split(';')[2]
  }

  test.each([
    [0, '+000000.00'],
    [1, '+000000.01'],
    [-1, '-000000.01'],
    [7_22, '+000007.22'],
    [107_22, '+000107.22'],
    [999_999_99, '+999999.99'],
    [-999_999_99, '-999999.99']
  ])(
    'should serialize monetary cent amount %s as "%s"',
    (cents, expectedSerialization) => {
      expect(serializedMoney(cents)).toEqual(expectedSerialization)
    }
  )

  test.each([[NaN], [Number.NaN], [1_000_000_00], [-1_000_000_00]])(
    'should refuse to serialize invalid or unrepresentable monetary cent amount %s',
    (cents) => {
      expect(() => serializedMoney(cents)).toThrow()
    }
  )

  it('should randomize message ticket ids', () => {
    const randomTicketIdsInSerializedMessage = (
      messageObject,
      ticketIdRegex
    ) => {
      return serializedMessage(messageObject, true, false)
        .split(';')
        .filter((path) => path.match(ticketIdRegex))
    }
    const totoMessage = {
      recordId: oiva.recordId.GroupBettingWagerFractionating,
      gameType: oiva.gameType.Toto,
      transAmount: 15_00,
      ticketSerial: 'X',
      shareTicketSerials: ['Y', 'Z']
    }
    expect(
      randomTicketIdsInSerializedMessage(totoMessage, /^\d{18}$/).length
    ).toEqual(3)

    const lottoMessage = {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      transAmount: 1_03,
      ticketSerial: 'A'
    }
    expect(
      randomTicketIdsInSerializedMessage(lottoMessage, /^0\d{19}$/).length
    ).toEqual(1)
  })
})

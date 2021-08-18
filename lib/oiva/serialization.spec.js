const { expect, test, it, describe } = require('@jest/globals')
const { serializedMessage } = require('./serialization')
const oiva = require('./definitions')

describe('Oiva serialization', () => {
  test.each([
    [
      'wager',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Lotto,
        gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
        transAmount: 1_03,
        ticketSerial: '1234-111111111-083366'
      },
      ':02;173803;01;01;00;00;+000001.03;01234111111111083366;0;\r\n'
    ],
    [
      'wager, explicit time',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Lotto,
        gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
        transAmount: 1_03,
        ticketSerial: '1234-111111111-083366',
        transTime: '111213'
      },
      ':02;111213;01;01;00;00;+000001.03;01234111111111083366;0;\r\n'
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
          'A-AAAA-BBBB-CDDD',
        ]
      },
      ':05;173803;33;00;00;00;+000015.00;104369048059524288;3;104369048059524295;104369048059524455;104369048059527012;\r\n'
    ],
    [
      'cashing, with side games',
      {
        recordId: oiva.recordId.WagerValidation,
        gameType: oiva.gameType.Lotto,
        gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
        sideGameType: oiva.sideGameType.ValidationJokeriAndLomatonniIncluded,
        sideGameIndex: oiva.sideGameIndex.JokeriAndLomatonni,
        transAmount: -234_86,
        ticketSerial: '1234-111111111-083366'
      },
      ':04;173803;01;01;06;97;-000234.86;01234111111111083366;0;\r\n'
    ],
    [
      'total',
      {
        recordId: oiva.recordId.TotalOrReceivedKey,
        totalAmount: 123_45,
        numTrans: 3
      },
      ':10;173803;+000123.45;0003;\r\n'
    ],
  ])('should correctly serialize message: %s', (_, messageObject, expectedSerialization) => {
    expect(serializedMessage(messageObject, false, false)).toEqual(expectedSerialization)
  })

  function serializedMoney(cents) {
    return serializedMessage({
      recordId: oiva.recordId.TotalOrReceivedKey,
      totalAmount: cents,
      numTrans: 1
    }, false, false).split(';')[2]
  }

  test.each([
    [0, '+000000.00'],
    [1, '+000000.01'],
    [-1, '-000000.01'],
    [7_22, '+000007.22'],
    [107_22, '+000107.22'],
    [999_999_99, '+999999.99'],
    [-999_999_99, '-999999.99'],
  ])('should serialize monetary cent amount %s as "%s"', (cents, expectedSerialization) => {
    expect(serializedMoney(cents)).toEqual(expectedSerialization)
  })

  test.each([
    [NaN],
    [Number.NaN],
    [1_000_000_00],
    [-1_000_000_00],
  ])('should refuse to serialize invalid or unrepresentable monetary cent amount %s', (cents) => {
    expect(() => serializedMoney(cents)).toThrow()
  })

  it('should randomize message ticket ids', () => {
    const randomTicketIdsInSerializedMessage = (messageObject, ticketIdRegex) => {
      return serializedMessage(messageObject, true, false)
          .split(';')
          .filter(path => path.match(ticketIdRegex))
    }
    const totoMessage = {
      recordId: oiva.recordId.GroupBettingWagerFractionating,
      gameType: oiva.gameType.Toto,
      transAmount: 15_00,
      ticketSerial: 'X',
      shareTicketSerials: [ 'Y', 'Z' ]
    }
    expect(randomTicketIdsInSerializedMessage(totoMessage, /^\d{18}$/).length).toEqual(3)

    const lottoMessage = {
      recordId: oiva.recordId.WagerSales,
      gameType: oiva.gameType.Lotto,
      gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
      transAmount: 1_03,
      ticketSerial: 'A'
    }
    expect(randomTicketIdsInSerializedMessage(lottoMessage, /^0\d{19}$/).length).toEqual(1)
  })
})

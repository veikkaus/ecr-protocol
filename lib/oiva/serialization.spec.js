const { expect, test } = require('@jest/globals')
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
        ticketId: '1234-111111111-083366'
      },
      ':02;173803;01;01;00;00;+000001.03;1234-111111111-083366;0;\r\n'
    ],
    [
      'wager, explicit time',
      {
        recordId: oiva.recordId.WagerSales,
        gameType: oiva.gameType.Lotto,
        gameIndex: oiva.gameIndex.lotto.SaturdayLotto,
        transAmount: 1_03,
        ticketId: '1234-111111111-083366',
        transTime: '111213'
      },
      ':02;111213;01;01;00;00;+000001.03;1234-111111111-083366;0;\r\n'
    ],
    [
      'wager with shares',
      {
        recordId: oiva.recordId.GroupBettingWagerFractionating,
        gameType: oiva.gameType.Toto,
        transAmount: 15_00,
        ticketId: 'A-AAAA-BBBB-CCCC',
        shareTicketIds: [
          'A-AAAA-BBBB-CCCD',
          'A-AAAA-BBBB-CCDD',
          'A-AAAA-BBBB-CDDD',
        ]
      },
      ':05;173803;33;00;00;00;+000015.00;A-AAAA-BBBB-CCCC;3;A-AAAA-BBBB-CCCD;A-AAAA-BBBB-CCDD;A-AAAA-BBBB-CDDD;\r\n'
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
        ticketId: '1234-111111111-083366'
      },
      ':04;173803;01;01;06;97;-000234.86;1234-111111111-083366;0;\r\n'
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
    expect(serializedMessage(messageObject)).toEqual(expectedSerialization)
  })

  function serializedMoney(cents) {
    return serializedMessage({
      recordId: oiva.recordId.TotalOrReceivedKey,
      totalAmount: cents,
      numTrans: 1
    }).split(';')[2]
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
})

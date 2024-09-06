const { gameType } = require("./definitions")
const { expect, it, describe } = require('@jest/globals')
const { ticketSerialToBarcodeData } = require('./barcode')

describe('barcode', () => {

    it('should create barcode value for toto ticket serial', () => {
        let result = ticketSerialToBarcodeData('A-AAAA-BBBB-CCCC', gameType.Toto);
        expect(result).toEqual('104369048059524288')
    })

    it('should create barcode value for lotto ticket serial', () => {
        let result = ticketSerialToBarcodeData('1234-111111111-083366', gameType.Lotto);
        expect(result).toEqual('01234111111111083366')
    })

})
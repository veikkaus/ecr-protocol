const { gameType } = require("./definitions")
const { expect, it, describe } = require('@jest/globals')
const { createBarcodeImage } = require('./barcode')

describe('barcode', () => {

    it('should create barcode value for toto ticketId', () => {
        let mockImageCreator = jest.fn()
        createBarcodeImage('A-AAAA-BBBB-CCCC', gameType.Toto, mockImageCreator)
        expect(mockImageCreator).toHaveBeenCalledWith('A-AAAA-BBBB-CCCC', '104369048059524288')
    })

    it('should create barcode value for lotto ticketId', () => {
        let mockImageCreator = jest.fn()
        createBarcodeImage('1234-111111111-083366', gameType.Lotto, mockImageCreator)
        expect(mockImageCreator).toHaveBeenCalledWith('1234-111111111-083366', '01234111111111083366')
    })

})
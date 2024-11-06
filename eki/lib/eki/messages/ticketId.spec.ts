import { expect, it, describe } from '@jest/globals'
import { generateGenericTicketId, generateScratchcardTicketId } from './ticketId'

describe('ticketId', () => {
  describe('generateGenericTicketId', () => {
    it('should generate a ticket ID with correct length', () => {
      expect(generateGenericTicketId()).toHaveLength(50)
    })

    it('should generate a ticket ID with correct prefix', () => {
      expect(generateGenericTicketId()).toMatch(/^90199/)
    })

    it('should generate a ticket ID with alphanumeric characters', () => {
      expect(generateGenericTicketId()).toMatch(/^[A-Za-z0-9]+$/)
    })
  })

  describe('generateScratchcardTicketId', () => {
    it('should generate a ticket ID with correct length', () => {
      expect(generateScratchcardTicketId()).toHaveLength(28)
    })

    it('should generate a ticket ID with correct prefix', () => {
      expect(generateScratchcardTicketId()).toMatch(/^90100/)
    })

    it('should generate a ticket ID with numeric characters only', () => {
      expect(generateScratchcardTicketId()).toMatch(/^[0-9]+$/)
    })
  })
})
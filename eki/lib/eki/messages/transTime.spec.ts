import { expect, it, describe } from '@jest/globals'
import { DateTime, Settings } from 'luxon'
import { getTransTime } from './transTime'

describe('transTime', () => {
  describe('getTransTime', () => {
    it('should return the current time in HHMMSS format', () => {
      const mockDateNow = DateTime.local(2025, 4, 1, 12, 0, 0);
      Settings.now = () => mockDateNow.toMillis();
      const now = DateTime.now()
      expect(getTransTime(0)).toBe('120000')
    })

    it('should return 30 seconds before the current time in HHMMSS format', () => {
      const mockDateNow = DateTime.local(2025, 4, 1, 12, 0, 0);
      Settings.now = () => mockDateNow.toMillis();
      const now = DateTime.now()
      expect(getTransTime(1)).toBe('115930')
    })
  })
})
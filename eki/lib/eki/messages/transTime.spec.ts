import { expect, it, describe } from '@jest/globals'
import { DateTime } from 'luxon'
import { getTransTime } from './transTime'

describe('transTime', () => {
  describe('getTransTime', () => {
    it('should return the current time in HHMMSS format', () => {
      const now = DateTime.now()
      const expected = `${now.hour.toString().padStart(2, '0')}${now.minute
        .toString()
        .padStart(2, '0')}${now.second.toString().padStart(2, '0')}`
      expect(getTransTime(0)).toBe(expected)
    })
  })
})